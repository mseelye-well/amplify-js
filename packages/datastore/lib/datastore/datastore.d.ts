import Observable from 'zen-observable-ts';
import {
	DataStoreConfig,
	ModelInit,
	ModelInstanceMetadata,
	PaginationInput,
	PersistentModel,
	PersistentModelConstructor,
	ProducerModelPredicate,
	Schema,
	SubscriptionMessage,
} from '../types';
declare const initSchema: (
	userSchema: Schema
) => {
	[modelName: string]: PersistentModelConstructor<any>;
};
export declare type ModelInstanceCreator = typeof modelInstanceCreator;
declare function modelInstanceCreator<
	T extends PersistentModel = PersistentModel
>(
	modelConstructor: PersistentModelConstructor<T>,
	init: ModelInit<T> & Partial<ModelInstanceMetadata>
): T;
declare function configure(config?: DataStoreConfig): void;
declare function clear(): Promise<void>;
declare class DataStore {
	static getModuleName(): string;
	static query: {
		<
			T extends Readonly<
				{
					id: string;
				} & Record<string, any>
			>
		>(
			modelConstructor: PersistentModelConstructor<T>,
			id: string
		): Promise<T>;
		<
			T_1 extends Readonly<
				{
					id: string;
				} & Record<string, any>
			>
		>(
			modelConstructor: PersistentModelConstructor<T_1>,
			criteria?: ProducerModelPredicate<T_1>,
			pagination?: PaginationInput
		): Promise<T_1[]>;
	};
	static save: <
		T extends Readonly<
			{
				id: string;
			} & Record<string, any>
		>
	>(
		model: T,
		condition?: ProducerModelPredicate<T>
	) => Promise<T[]>;
	static delete: {
		<
			T extends Readonly<
				{
					id: string;
				} & Record<string, any>
			>
		>(
			model: T,
			condition?: ProducerModelPredicate<T>
		): Promise<T>;
		<
			T_1 extends Readonly<
				{
					id: string;
				} & Record<string, any>
			>
		>(
			modelConstructor: PersistentModelConstructor<T_1>,
			id: string
		): Promise<T_1>;
		<
			T_2 extends Readonly<
				{
					id: string;
				} & Record<string, any>
			>
		>(
			modelConstructor: PersistentModelConstructor<T_2>,
			condition: ProducerModelPredicate<T_2>
		): Promise<T_2[]>;
	};
	static observe: {
		(): Observable<SubscriptionMessage<any>>;
		<
			T extends Readonly<
				{
					id: string;
				} & Record<string, any>
			>
		>(
			obj: T
		): Observable<SubscriptionMessage<T>>;
		<
			T_1 extends Readonly<
				{
					id: string;
				} & Record<string, any>
			>
		>(
			modelConstructor: PersistentModelConstructor<T_1>,
			id: string
		): Observable<SubscriptionMessage<T_1>>;
		<
			T_2 extends Readonly<
				{
					id: string;
				} & Record<string, any>
			>
		>(
			modelConstructor: PersistentModelConstructor<T_2>
		): Observable<SubscriptionMessage<T_2>>;
		<
			T_3 extends Readonly<
				{
					id: string;
				} & Record<string, any>
			>
		>(
			modelConstructor: PersistentModelConstructor<T_3>,
			criteria: ProducerModelPredicate<T_3>
		): Observable<SubscriptionMessage<T_3>>;
	};
	static configure: typeof configure;
	static clear: typeof clear;
}
export { initSchema, DataStore };
