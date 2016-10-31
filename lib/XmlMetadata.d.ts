import { Edm } from 'odata-v4-metadata';
export declare class XmlMetadata {
    metadata: Edm.Edmx;
    private options;
    constructor(options: any, edmx: Edm.Edmx);
    processMetadata(): any;
    buildEdmx(xml: any, edmx: any): void;
    buildDataServices(xml: any, dataservices: any): void;
    buildSchema(xml: any, schemas: any): void;
    buildEnumTypes(xml: any, enumTypes: any): void;
    buildEntityTypes(xml: any, entityTypes: any): void;
    buildComplexTypes(xml: any, complexTypes: any): void;
    buildType(xml: any, type: any, xmlElementName: any): void;
    buildTypeKeys(xml: any, key: any): void;
    buildTypeProperties(xml: any, properties: any): void;
    typePropertyAttributes: Object;
    buildTypeNavigationProperties(xml: any, navigationProperties: any): void;
    buildNavPropertyReferentialConstraints(xml: any, referentialConstraints: any): void;
    typeNavigationPropertyAttributes: Object;
    buildEnumMembers(xml: any, members: any): void;
    typeMemberAttributes: Object;
    buildAttributes(xml: any, object: any, mappings: any): void;
    buildActions(xml: any, actions: any): void;
    buildFunctions(xml: any, functions: any): void;
    buildParameters(xml: any, parameters: any): void;
    parameterAttributes: Object;
    buildReturnType(xml: any, returnType: any): void;
    buildEntityContainer(xml: any, entityContainers: any): void;
    buildEntitySets(xml: any, entitySets: any): void;
    buildActionImports(xml: any, actionImports: any): void;
    buildFunctionImports(xml: any, functionImports: any): void;
    buildSchemaAnnotations(xml: any, schemaAnnotations: any): void;
    buildAnnotations(xml: any, annotations: any): void;
    buildCollectionAnnotation(xml: any, value: any, annotConfig: any, annotation: any): void;
    annotationAttributes: Object;
    annotationTypes: Object;
}
