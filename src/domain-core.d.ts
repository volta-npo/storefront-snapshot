export declare function validateDomainDefinition(domain: any): boolean;
export declare function validateDomainState(domain: any, state: any): any[];
export declare function createDomainState(domain: any): {
    version: string;
    values: {};
    rows: any;
    generated: any[];
    updatedAt: string;
};
export declare function calculateDomain(domain: any, state: any): {
    primary: number;
    secondary: number;
    completeness: number;
    rowScore: number;
    approved: any;
    insight: string;
    warnings: any[];
    releaseReady: boolean;
};
export declare function generateDomainArtifacts(config: any, domain: any, state: any): any;
export declare function buildDomainMarkdown(config: any, domain: any, state: any): string;
export declare function buildDomainCsv(domain: any, state: any): string;
export declare function buildSaasWorkflow(domain: any, state: any): any;
export declare function buildSaasSummary(config: any, domain: any, state: any): {
    product: any;
    client: any;
    primaryGoal: any;
    primaryPersona: any;
    launchStage: any;
    commercialReadiness: number;
    nextBestActions: any[];
    workflow: any;
};
export declare function buildClientBrief(config: any, domain: any, state: any): string;
export declare function buildSaasJson(config: any, domain: any, state: any): string;
export declare function buildProductBacklogCsv(domain: any, state: any): string;
export declare function applyDomainSample(domain: any): {
    version: string;
    values: {};
    rows: any;
    generated: any[];
    updatedAt: string;
};
