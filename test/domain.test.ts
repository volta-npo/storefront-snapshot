import test from 'node:test';
import assert from 'node:assert/strict';
import { config } from '../src/config.js';
import { domain } from '../src/domain.js';
import { validateDomainDefinition, createDomainState, calculateDomain, generateDomainArtifacts, buildDomainMarkdown, buildDomainCsv, validateDomainState, applyDomainSample, buildSaasWorkflow, buildSaasSummary, buildClientBrief, buildSaasJson, buildProductBacklogCsv } from '../src/domain-core.js';

test('domain tool definition is purpose-built', () => {
  assert.equal(validateDomainDefinition(domain), true);
  assert.ok(domain.kind.length > 3);
  assert.ok(domain.fields.length >= 4);
  assert.ok(domain.rows.length >= 6);
});

test('domain sample becomes release ready', () => {
  const state = applyDomainSample(domain);
  const calc = calculateDomain(domain, state);
  assert.equal(calc.releaseReady, true);
  assert.ok(calc.completeness >= 80);
  assert.ok(calc.rowScore >= 75);
});

test('domain artifacts and markdown are product-specific', () => {
  const state = applyDomainSample(domain);
  const artifacts = generateDomainArtifacts(config, domain, state);
  const md = buildDomainMarkdown(config, domain, state);
  assert.equal(artifacts.length, domain.artifacts.length);
  assert.match(md, new RegExp(config.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  assert.match(md, new RegExp(domain.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
});

test('domain validation catches missing evidence and score bounds', () => {
  const state = createDomainState(domain);
  state.rows[0].approved = true;
  state.rows[0].value = '';
  state.rows[0].score = 11;
  const warnings = validateDomainState(domain, state);
  assert.ok(warnings.some((warning) => /required|evidence|score/i.test(warning)));
  assert.equal(calculateDomain(domain, state).releaseReady, false);
});

test('domain csv export includes every work row', () => {
  const state = applyDomainSample(domain);
  const csv = buildDomainCsv(domain, state);
  assert.equal(csv.split('\n').length, domain.rows.length + 1);
  assert.match(csv, /approved/);
  assert.match(csv, /next_action/);
});

test('saas workflow summarizes launch stages and next actions', () => {
  const state = createDomainState(domain);
  const workflow = buildSaasWorkflow(domain, state);
  const summary = buildSaasSummary(config, domain, state);
  assert.ok(workflow.length >= 3);
  assert.ok(summary.commercialReadiness >= 0);
  assert.ok(summary.nextBestActions.length > 0);
});

test('saas exports include client brief, json packet, and backlog', () => {
  const state = applyDomainSample(domain);
  const brief = buildClientBrief(config, domain, state);
  const packet = JSON.parse(buildSaasJson(config, domain, state));
  const backlog = buildProductBacklogCsv(domain, state);
  assert.match(brief, /SaaS Launch Brief/);
  assert.equal(packet.tool, domain.title);
  assert.match(backlog, /stage,status,readiness/);
});
