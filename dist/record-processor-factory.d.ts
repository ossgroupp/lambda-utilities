import { BodyExtractors, IdExtractors, ProcessedRecordsResponse, RecordProcessorFactoryArguments } from './interfaces/record-processor.interface';
export declare const bodyExtractors: () => BodyExtractors;
export declare const idExtractors: () => IdExtractors;
export declare const recordProcessorFactory: <RecordType = any, BodyType = any, ItemResponseType = any>({ handleItem, ...dependencies }: RecordProcessorFactoryArguments<RecordType, BodyType, ItemResponseType>) => ({ Records, }: {
    Records: any;
}) => Promise<ProcessedRecordsResponse<ItemResponseType>>;
