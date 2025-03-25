
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Inistutations
 * 
 */
export type Inistutations = $Result.DefaultSelection<Prisma.$InistutationsPayload>
/**
 * Model Teachers
 * 
 */
export type Teachers = $Result.DefaultSelection<Prisma.$TeachersPayload>
/**
 * Model Students
 * 
 */
export type Students = $Result.DefaultSelection<Prisma.$StudentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Instutation_type: {
  school: 'school',
  college: 'college',
  school_college: 'school_college',
  madrasha: 'madrasha',
  coaching_center: 'coaching_center',
  primary_school: 'primary_school',
  others: 'others'
};

export type Instutation_type = (typeof Instutation_type)[keyof typeof Instutation_type]


export const Religion: {
  islam: 'islam',
  hindu: 'hindu',
  buddhist: 'buddhist',
  christian: 'christian',
  others: 'others'
};

export type Religion = (typeof Religion)[keyof typeof Religion]


export const Gender: {
  male: 'male',
  female: 'female',
  others: 'others'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const In_Role: {
  student: 'student',
  teacher: 'teacher'
};

export type In_Role = (typeof In_Role)[keyof typeof In_Role]


export const Studen_Status: {
  current: 'current',
  alumni: 'alumni'
};

export type Studen_Status = (typeof Studen_Status)[keyof typeof Studen_Status]

}

export type Instutation_type = $Enums.Instutation_type

export const Instutation_type: typeof $Enums.Instutation_type

export type Religion = $Enums.Religion

export const Religion: typeof $Enums.Religion

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type In_Role = $Enums.In_Role

export const In_Role: typeof $Enums.In_Role

export type Studen_Status = $Enums.Studen_Status

export const Studen_Status: typeof $Enums.Studen_Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inistutations
 * const inistutations = await prisma.inistutations.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inistutations
   * const inistutations = await prisma.inistutations.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.inistutations`: Exposes CRUD operations for the **Inistutations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inistutations
    * const inistutations = await prisma.inistutations.findMany()
    * ```
    */
  get inistutations(): Prisma.InistutationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachers`: Exposes CRUD operations for the **Teachers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teachers.findMany()
    * ```
    */
  get teachers(): Prisma.TeachersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **Students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.StudentsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Inistutations: 'Inistutations',
    Teachers: 'Teachers',
    Students: 'Students'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "inistutations" | "teachers" | "students"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Inistutations: {
        payload: Prisma.$InistutationsPayload<ExtArgs>
        fields: Prisma.InistutationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InistutationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InistutationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InistutationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InistutationsPayload>
          }
          findFirst: {
            args: Prisma.InistutationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InistutationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InistutationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InistutationsPayload>
          }
          findMany: {
            args: Prisma.InistutationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InistutationsPayload>[]
          }
          create: {
            args: Prisma.InistutationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InistutationsPayload>
          }
          createMany: {
            args: Prisma.InistutationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InistutationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InistutationsPayload>
          }
          update: {
            args: Prisma.InistutationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InistutationsPayload>
          }
          deleteMany: {
            args: Prisma.InistutationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InistutationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InistutationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InistutationsPayload>
          }
          aggregate: {
            args: Prisma.InistutationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInistutations>
          }
          groupBy: {
            args: Prisma.InistutationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InistutationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InistutationsCountArgs<ExtArgs>
            result: $Utils.Optional<InistutationsCountAggregateOutputType> | number
          }
        }
      }
      Teachers: {
        payload: Prisma.$TeachersPayload<ExtArgs>
        fields: Prisma.TeachersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachersPayload>
          }
          findFirst: {
            args: Prisma.TeachersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachersPayload>
          }
          findMany: {
            args: Prisma.TeachersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachersPayload>[]
          }
          create: {
            args: Prisma.TeachersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachersPayload>
          }
          createMany: {
            args: Prisma.TeachersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeachersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachersPayload>
          }
          update: {
            args: Prisma.TeachersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachersPayload>
          }
          deleteMany: {
            args: Prisma.TeachersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeachersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachersPayload>
          }
          aggregate: {
            args: Prisma.TeachersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachers>
          }
          groupBy: {
            args: Prisma.TeachersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachersGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachersCountArgs<ExtArgs>
            result: $Utils.Optional<TeachersCountAggregateOutputType> | number
          }
        }
      }
      Students: {
        payload: Prisma.$StudentsPayload<ExtArgs>
        fields: Prisma.StudentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          findFirst: {
            args: Prisma.StudentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          findMany: {
            args: Prisma.StudentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          create: {
            args: Prisma.StudentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          createMany: {
            args: Prisma.StudentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          update: {
            args: Prisma.StudentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          deleteMany: {
            args: Prisma.StudentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.StudentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    inistutations?: InistutationsOmit
    teachers?: TeachersOmit
    students?: StudentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InistutationsCountOutputType
   */

  export type InistutationsCountOutputType = {
    teachers: number
    students: number
  }

  export type InistutationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | InistutationsCountOutputTypeCountTeachersArgs
    students?: boolean | InistutationsCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * InistutationsCountOutputType without action
   */
  export type InistutationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InistutationsCountOutputType
     */
    select?: InistutationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InistutationsCountOutputType without action
   */
  export type InistutationsCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachersWhereInput
  }

  /**
   * InistutationsCountOutputType without action
   */
  export type InistutationsCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Inistutations
   */

  export type AggregateInistutations = {
    _count: InistutationsCountAggregateOutputType | null
    _min: InistutationsMinAggregateOutputType | null
    _max: InistutationsMaxAggregateOutputType | null
  }

  export type InistutationsMinAggregateOutputType = {
    eiin: string | null
    name_eng: string | null
    name_bng: string | null
    founding_date: Date | null
    address: string | null
    phone_number: string | null
    email: string | null
    proof_of_document: string | null
    logo: string | null
    type: $Enums.Instutation_type | null
    isVarified: boolean | null
    password: string | null
  }

  export type InistutationsMaxAggregateOutputType = {
    eiin: string | null
    name_eng: string | null
    name_bng: string | null
    founding_date: Date | null
    address: string | null
    phone_number: string | null
    email: string | null
    proof_of_document: string | null
    logo: string | null
    type: $Enums.Instutation_type | null
    isVarified: boolean | null
    password: string | null
  }

  export type InistutationsCountAggregateOutputType = {
    eiin: number
    name_eng: number
    name_bng: number
    founding_date: number
    address: number
    phone_number: number
    email: number
    proof_of_document: number
    logo: number
    type: number
    isVarified: number
    password: number
    _all: number
  }


  export type InistutationsMinAggregateInputType = {
    eiin?: true
    name_eng?: true
    name_bng?: true
    founding_date?: true
    address?: true
    phone_number?: true
    email?: true
    proof_of_document?: true
    logo?: true
    type?: true
    isVarified?: true
    password?: true
  }

  export type InistutationsMaxAggregateInputType = {
    eiin?: true
    name_eng?: true
    name_bng?: true
    founding_date?: true
    address?: true
    phone_number?: true
    email?: true
    proof_of_document?: true
    logo?: true
    type?: true
    isVarified?: true
    password?: true
  }

  export type InistutationsCountAggregateInputType = {
    eiin?: true
    name_eng?: true
    name_bng?: true
    founding_date?: true
    address?: true
    phone_number?: true
    email?: true
    proof_of_document?: true
    logo?: true
    type?: true
    isVarified?: true
    password?: true
    _all?: true
  }

  export type InistutationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inistutations to aggregate.
     */
    where?: InistutationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inistutations to fetch.
     */
    orderBy?: InistutationsOrderByWithRelationInput | InistutationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InistutationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inistutations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inistutations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inistutations
    **/
    _count?: true | InistutationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InistutationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InistutationsMaxAggregateInputType
  }

  export type GetInistutationsAggregateType<T extends InistutationsAggregateArgs> = {
        [P in keyof T & keyof AggregateInistutations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInistutations[P]>
      : GetScalarType<T[P], AggregateInistutations[P]>
  }




  export type InistutationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InistutationsWhereInput
    orderBy?: InistutationsOrderByWithAggregationInput | InistutationsOrderByWithAggregationInput[]
    by: InistutationsScalarFieldEnum[] | InistutationsScalarFieldEnum
    having?: InistutationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InistutationsCountAggregateInputType | true
    _min?: InistutationsMinAggregateInputType
    _max?: InistutationsMaxAggregateInputType
  }

  export type InistutationsGroupByOutputType = {
    eiin: string
    name_eng: string
    name_bng: string
    founding_date: Date | null
    address: string | null
    phone_number: string
    email: string
    proof_of_document: string | null
    logo: string | null
    type: $Enums.Instutation_type
    isVarified: boolean
    password: string
    _count: InistutationsCountAggregateOutputType | null
    _min: InistutationsMinAggregateOutputType | null
    _max: InistutationsMaxAggregateOutputType | null
  }

  type GetInistutationsGroupByPayload<T extends InistutationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InistutationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InistutationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InistutationsGroupByOutputType[P]>
            : GetScalarType<T[P], InistutationsGroupByOutputType[P]>
        }
      >
    >


  export type InistutationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eiin?: boolean
    name_eng?: boolean
    name_bng?: boolean
    founding_date?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
    proof_of_document?: boolean
    logo?: boolean
    type?: boolean
    isVarified?: boolean
    password?: boolean
    teachers?: boolean | Inistutations$teachersArgs<ExtArgs>
    students?: boolean | Inistutations$studentsArgs<ExtArgs>
    _count?: boolean | InistutationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inistutations"]>



  export type InistutationsSelectScalar = {
    eiin?: boolean
    name_eng?: boolean
    name_bng?: boolean
    founding_date?: boolean
    address?: boolean
    phone_number?: boolean
    email?: boolean
    proof_of_document?: boolean
    logo?: boolean
    type?: boolean
    isVarified?: boolean
    password?: boolean
  }

  export type InistutationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eiin" | "name_eng" | "name_bng" | "founding_date" | "address" | "phone_number" | "email" | "proof_of_document" | "logo" | "type" | "isVarified" | "password", ExtArgs["result"]["inistutations"]>
  export type InistutationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | Inistutations$teachersArgs<ExtArgs>
    students?: boolean | Inistutations$studentsArgs<ExtArgs>
    _count?: boolean | InistutationsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InistutationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inistutations"
    objects: {
      teachers: Prisma.$TeachersPayload<ExtArgs>[]
      students: Prisma.$StudentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      eiin: string
      name_eng: string
      name_bng: string
      founding_date: Date | null
      address: string | null
      phone_number: string
      email: string
      proof_of_document: string | null
      logo: string | null
      type: $Enums.Instutation_type
      isVarified: boolean
      password: string
    }, ExtArgs["result"]["inistutations"]>
    composites: {}
  }

  type InistutationsGetPayload<S extends boolean | null | undefined | InistutationsDefaultArgs> = $Result.GetResult<Prisma.$InistutationsPayload, S>

  type InistutationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InistutationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InistutationsCountAggregateInputType | true
    }

  export interface InistutationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inistutations'], meta: { name: 'Inistutations' } }
    /**
     * Find zero or one Inistutations that matches the filter.
     * @param {InistutationsFindUniqueArgs} args - Arguments to find a Inistutations
     * @example
     * // Get one Inistutations
     * const inistutations = await prisma.inistutations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InistutationsFindUniqueArgs>(args: SelectSubset<T, InistutationsFindUniqueArgs<ExtArgs>>): Prisma__InistutationsClient<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inistutations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InistutationsFindUniqueOrThrowArgs} args - Arguments to find a Inistutations
     * @example
     * // Get one Inistutations
     * const inistutations = await prisma.inistutations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InistutationsFindUniqueOrThrowArgs>(args: SelectSubset<T, InistutationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InistutationsClient<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inistutations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InistutationsFindFirstArgs} args - Arguments to find a Inistutations
     * @example
     * // Get one Inistutations
     * const inistutations = await prisma.inistutations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InistutationsFindFirstArgs>(args?: SelectSubset<T, InistutationsFindFirstArgs<ExtArgs>>): Prisma__InistutationsClient<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inistutations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InistutationsFindFirstOrThrowArgs} args - Arguments to find a Inistutations
     * @example
     * // Get one Inistutations
     * const inistutations = await prisma.inistutations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InistutationsFindFirstOrThrowArgs>(args?: SelectSubset<T, InistutationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InistutationsClient<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inistutations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InistutationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inistutations
     * const inistutations = await prisma.inistutations.findMany()
     * 
     * // Get first 10 Inistutations
     * const inistutations = await prisma.inistutations.findMany({ take: 10 })
     * 
     * // Only select the `eiin`
     * const inistutationsWithEiinOnly = await prisma.inistutations.findMany({ select: { eiin: true } })
     * 
     */
    findMany<T extends InistutationsFindManyArgs>(args?: SelectSubset<T, InistutationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inistutations.
     * @param {InistutationsCreateArgs} args - Arguments to create a Inistutations.
     * @example
     * // Create one Inistutations
     * const Inistutations = await prisma.inistutations.create({
     *   data: {
     *     // ... data to create a Inistutations
     *   }
     * })
     * 
     */
    create<T extends InistutationsCreateArgs>(args: SelectSubset<T, InistutationsCreateArgs<ExtArgs>>): Prisma__InistutationsClient<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inistutations.
     * @param {InistutationsCreateManyArgs} args - Arguments to create many Inistutations.
     * @example
     * // Create many Inistutations
     * const inistutations = await prisma.inistutations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InistutationsCreateManyArgs>(args?: SelectSubset<T, InistutationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inistutations.
     * @param {InistutationsDeleteArgs} args - Arguments to delete one Inistutations.
     * @example
     * // Delete one Inistutations
     * const Inistutations = await prisma.inistutations.delete({
     *   where: {
     *     // ... filter to delete one Inistutations
     *   }
     * })
     * 
     */
    delete<T extends InistutationsDeleteArgs>(args: SelectSubset<T, InistutationsDeleteArgs<ExtArgs>>): Prisma__InistutationsClient<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inistutations.
     * @param {InistutationsUpdateArgs} args - Arguments to update one Inistutations.
     * @example
     * // Update one Inistutations
     * const inistutations = await prisma.inistutations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InistutationsUpdateArgs>(args: SelectSubset<T, InistutationsUpdateArgs<ExtArgs>>): Prisma__InistutationsClient<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inistutations.
     * @param {InistutationsDeleteManyArgs} args - Arguments to filter Inistutations to delete.
     * @example
     * // Delete a few Inistutations
     * const { count } = await prisma.inistutations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InistutationsDeleteManyArgs>(args?: SelectSubset<T, InistutationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inistutations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InistutationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inistutations
     * const inistutations = await prisma.inistutations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InistutationsUpdateManyArgs>(args: SelectSubset<T, InistutationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inistutations.
     * @param {InistutationsUpsertArgs} args - Arguments to update or create a Inistutations.
     * @example
     * // Update or create a Inistutations
     * const inistutations = await prisma.inistutations.upsert({
     *   create: {
     *     // ... data to create a Inistutations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inistutations we want to update
     *   }
     * })
     */
    upsert<T extends InistutationsUpsertArgs>(args: SelectSubset<T, InistutationsUpsertArgs<ExtArgs>>): Prisma__InistutationsClient<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inistutations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InistutationsCountArgs} args - Arguments to filter Inistutations to count.
     * @example
     * // Count the number of Inistutations
     * const count = await prisma.inistutations.count({
     *   where: {
     *     // ... the filter for the Inistutations we want to count
     *   }
     * })
    **/
    count<T extends InistutationsCountArgs>(
      args?: Subset<T, InistutationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InistutationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inistutations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InistutationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InistutationsAggregateArgs>(args: Subset<T, InistutationsAggregateArgs>): Prisma.PrismaPromise<GetInistutationsAggregateType<T>>

    /**
     * Group by Inistutations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InistutationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InistutationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InistutationsGroupByArgs['orderBy'] }
        : { orderBy?: InistutationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InistutationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInistutationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inistutations model
   */
  readonly fields: InistutationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inistutations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InistutationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teachers<T extends Inistutations$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Inistutations$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Inistutations$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Inistutations$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inistutations model
   */ 
  interface InistutationsFieldRefs {
    readonly eiin: FieldRef<"Inistutations", 'String'>
    readonly name_eng: FieldRef<"Inistutations", 'String'>
    readonly name_bng: FieldRef<"Inistutations", 'String'>
    readonly founding_date: FieldRef<"Inistutations", 'DateTime'>
    readonly address: FieldRef<"Inistutations", 'String'>
    readonly phone_number: FieldRef<"Inistutations", 'String'>
    readonly email: FieldRef<"Inistutations", 'String'>
    readonly proof_of_document: FieldRef<"Inistutations", 'String'>
    readonly logo: FieldRef<"Inistutations", 'String'>
    readonly type: FieldRef<"Inistutations", 'Instutation_type'>
    readonly isVarified: FieldRef<"Inistutations", 'Boolean'>
    readonly password: FieldRef<"Inistutations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inistutations findUnique
   */
  export type InistutationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inistutations
     */
    select?: InistutationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inistutations
     */
    omit?: InistutationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InistutationsInclude<ExtArgs> | null
    /**
     * Filter, which Inistutations to fetch.
     */
    where: InistutationsWhereUniqueInput
  }

  /**
   * Inistutations findUniqueOrThrow
   */
  export type InistutationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inistutations
     */
    select?: InistutationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inistutations
     */
    omit?: InistutationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InistutationsInclude<ExtArgs> | null
    /**
     * Filter, which Inistutations to fetch.
     */
    where: InistutationsWhereUniqueInput
  }

  /**
   * Inistutations findFirst
   */
  export type InistutationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inistutations
     */
    select?: InistutationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inistutations
     */
    omit?: InistutationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InistutationsInclude<ExtArgs> | null
    /**
     * Filter, which Inistutations to fetch.
     */
    where?: InistutationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inistutations to fetch.
     */
    orderBy?: InistutationsOrderByWithRelationInput | InistutationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inistutations.
     */
    cursor?: InistutationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inistutations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inistutations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inistutations.
     */
    distinct?: InistutationsScalarFieldEnum | InistutationsScalarFieldEnum[]
  }

  /**
   * Inistutations findFirstOrThrow
   */
  export type InistutationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inistutations
     */
    select?: InistutationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inistutations
     */
    omit?: InistutationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InistutationsInclude<ExtArgs> | null
    /**
     * Filter, which Inistutations to fetch.
     */
    where?: InistutationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inistutations to fetch.
     */
    orderBy?: InistutationsOrderByWithRelationInput | InistutationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inistutations.
     */
    cursor?: InistutationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inistutations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inistutations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inistutations.
     */
    distinct?: InistutationsScalarFieldEnum | InistutationsScalarFieldEnum[]
  }

  /**
   * Inistutations findMany
   */
  export type InistutationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inistutations
     */
    select?: InistutationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inistutations
     */
    omit?: InistutationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InistutationsInclude<ExtArgs> | null
    /**
     * Filter, which Inistutations to fetch.
     */
    where?: InistutationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inistutations to fetch.
     */
    orderBy?: InistutationsOrderByWithRelationInput | InistutationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inistutations.
     */
    cursor?: InistutationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inistutations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inistutations.
     */
    skip?: number
    distinct?: InistutationsScalarFieldEnum | InistutationsScalarFieldEnum[]
  }

  /**
   * Inistutations create
   */
  export type InistutationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inistutations
     */
    select?: InistutationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inistutations
     */
    omit?: InistutationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InistutationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Inistutations.
     */
    data: XOR<InistutationsCreateInput, InistutationsUncheckedCreateInput>
  }

  /**
   * Inistutations createMany
   */
  export type InistutationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inistutations.
     */
    data: InistutationsCreateManyInput | InistutationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inistutations update
   */
  export type InistutationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inistutations
     */
    select?: InistutationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inistutations
     */
    omit?: InistutationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InistutationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Inistutations.
     */
    data: XOR<InistutationsUpdateInput, InistutationsUncheckedUpdateInput>
    /**
     * Choose, which Inistutations to update.
     */
    where: InistutationsWhereUniqueInput
  }

  /**
   * Inistutations updateMany
   */
  export type InistutationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inistutations.
     */
    data: XOR<InistutationsUpdateManyMutationInput, InistutationsUncheckedUpdateManyInput>
    /**
     * Filter which Inistutations to update
     */
    where?: InistutationsWhereInput
    /**
     * Limit how many Inistutations to update.
     */
    limit?: number
  }

  /**
   * Inistutations upsert
   */
  export type InistutationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inistutations
     */
    select?: InistutationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inistutations
     */
    omit?: InistutationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InistutationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Inistutations to update in case it exists.
     */
    where: InistutationsWhereUniqueInput
    /**
     * In case the Inistutations found by the `where` argument doesn't exist, create a new Inistutations with this data.
     */
    create: XOR<InistutationsCreateInput, InistutationsUncheckedCreateInput>
    /**
     * In case the Inistutations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InistutationsUpdateInput, InistutationsUncheckedUpdateInput>
  }

  /**
   * Inistutations delete
   */
  export type InistutationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inistutations
     */
    select?: InistutationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inistutations
     */
    omit?: InistutationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InistutationsInclude<ExtArgs> | null
    /**
     * Filter which Inistutations to delete.
     */
    where: InistutationsWhereUniqueInput
  }

  /**
   * Inistutations deleteMany
   */
  export type InistutationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inistutations to delete
     */
    where?: InistutationsWhereInput
    /**
     * Limit how many Inistutations to delete.
     */
    limit?: number
  }

  /**
   * Inistutations.teachers
   */
  export type Inistutations$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
    where?: TeachersWhereInput
    orderBy?: TeachersOrderByWithRelationInput | TeachersOrderByWithRelationInput[]
    cursor?: TeachersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeachersScalarFieldEnum | TeachersScalarFieldEnum[]
  }

  /**
   * Inistutations.students
   */
  export type Inistutations$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    where?: StudentsWhereInput
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    cursor?: StudentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Inistutations without action
   */
  export type InistutationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inistutations
     */
    select?: InistutationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inistutations
     */
    omit?: InistutationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InistutationsInclude<ExtArgs> | null
  }


  /**
   * Model Teachers
   */

  export type AggregateTeachers = {
    _count: TeachersCountAggregateOutputType | null
    _min: TeachersMinAggregateOutputType | null
    _max: TeachersMaxAggregateOutputType | null
  }

  export type TeachersMinAggregateOutputType = {
    id: string | null
    instutaion_id: string | null
    name_eng: string | null
    name_bng: string | null
    teacher_id: string | null
    teacher_enitial: string | null
    image: string | null
    email: string | null
    phone_number: string | null
    password: string | null
    religion: $Enums.Religion | null
    gender: $Enums.Gender | null
    date_of_birth: Date | null
    address: string | null
    signeture: string | null
    position: string | null
    blod_group: string | null
    role: $Enums.In_Role | null
  }

  export type TeachersMaxAggregateOutputType = {
    id: string | null
    instutaion_id: string | null
    name_eng: string | null
    name_bng: string | null
    teacher_id: string | null
    teacher_enitial: string | null
    image: string | null
    email: string | null
    phone_number: string | null
    password: string | null
    religion: $Enums.Religion | null
    gender: $Enums.Gender | null
    date_of_birth: Date | null
    address: string | null
    signeture: string | null
    position: string | null
    blod_group: string | null
    role: $Enums.In_Role | null
  }

  export type TeachersCountAggregateOutputType = {
    id: number
    instutaion_id: number
    name_eng: number
    name_bng: number
    teacher_id: number
    teacher_enitial: number
    image: number
    email: number
    phone_number: number
    password: number
    religion: number
    gender: number
    date_of_birth: number
    address: number
    signeture: number
    position: number
    blod_group: number
    role: number
    _all: number
  }


  export type TeachersMinAggregateInputType = {
    id?: true
    instutaion_id?: true
    name_eng?: true
    name_bng?: true
    teacher_id?: true
    teacher_enitial?: true
    image?: true
    email?: true
    phone_number?: true
    password?: true
    religion?: true
    gender?: true
    date_of_birth?: true
    address?: true
    signeture?: true
    position?: true
    blod_group?: true
    role?: true
  }

  export type TeachersMaxAggregateInputType = {
    id?: true
    instutaion_id?: true
    name_eng?: true
    name_bng?: true
    teacher_id?: true
    teacher_enitial?: true
    image?: true
    email?: true
    phone_number?: true
    password?: true
    religion?: true
    gender?: true
    date_of_birth?: true
    address?: true
    signeture?: true
    position?: true
    blod_group?: true
    role?: true
  }

  export type TeachersCountAggregateInputType = {
    id?: true
    instutaion_id?: true
    name_eng?: true
    name_bng?: true
    teacher_id?: true
    teacher_enitial?: true
    image?: true
    email?: true
    phone_number?: true
    password?: true
    religion?: true
    gender?: true
    date_of_birth?: true
    address?: true
    signeture?: true
    position?: true
    blod_group?: true
    role?: true
    _all?: true
  }

  export type TeachersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to aggregate.
     */
    where?: TeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeachersOrderByWithRelationInput | TeachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeachersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachersMaxAggregateInputType
  }

  export type GetTeachersAggregateType<T extends TeachersAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachers[P]>
      : GetScalarType<T[P], AggregateTeachers[P]>
  }




  export type TeachersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachersWhereInput
    orderBy?: TeachersOrderByWithAggregationInput | TeachersOrderByWithAggregationInput[]
    by: TeachersScalarFieldEnum[] | TeachersScalarFieldEnum
    having?: TeachersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachersCountAggregateInputType | true
    _min?: TeachersMinAggregateInputType
    _max?: TeachersMaxAggregateInputType
  }

  export type TeachersGroupByOutputType = {
    id: string
    instutaion_id: string
    name_eng: string
    name_bng: string
    teacher_id: string
    teacher_enitial: string
    image: string
    email: string
    phone_number: string
    password: string
    religion: $Enums.Religion
    gender: $Enums.Gender
    date_of_birth: Date
    address: string | null
    signeture: string | null
    position: string | null
    blod_group: string | null
    role: $Enums.In_Role
    _count: TeachersCountAggregateOutputType | null
    _min: TeachersMinAggregateOutputType | null
    _max: TeachersMaxAggregateOutputType | null
  }

  type GetTeachersGroupByPayload<T extends TeachersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachersGroupByOutputType[P]>
            : GetScalarType<T[P], TeachersGroupByOutputType[P]>
        }
      >
    >


  export type TeachersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instutaion_id?: boolean
    name_eng?: boolean
    name_bng?: boolean
    teacher_id?: boolean
    teacher_enitial?: boolean
    image?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    religion?: boolean
    gender?: boolean
    date_of_birth?: boolean
    address?: boolean
    signeture?: boolean
    position?: boolean
    blod_group?: boolean
    role?: boolean
    instutaion?: boolean | InistutationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachers"]>



  export type TeachersSelectScalar = {
    id?: boolean
    instutaion_id?: boolean
    name_eng?: boolean
    name_bng?: boolean
    teacher_id?: boolean
    teacher_enitial?: boolean
    image?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    religion?: boolean
    gender?: boolean
    date_of_birth?: boolean
    address?: boolean
    signeture?: boolean
    position?: boolean
    blod_group?: boolean
    role?: boolean
  }

  export type TeachersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instutaion_id" | "name_eng" | "name_bng" | "teacher_id" | "teacher_enitial" | "image" | "email" | "phone_number" | "password" | "religion" | "gender" | "date_of_birth" | "address" | "signeture" | "position" | "blod_group" | "role", ExtArgs["result"]["teachers"]>
  export type TeachersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instutaion?: boolean | InistutationsDefaultArgs<ExtArgs>
  }

  export type $TeachersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teachers"
    objects: {
      instutaion: Prisma.$InistutationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instutaion_id: string
      name_eng: string
      name_bng: string
      teacher_id: string
      teacher_enitial: string
      image: string
      email: string
      phone_number: string
      password: string
      religion: $Enums.Religion
      gender: $Enums.Gender
      date_of_birth: Date
      address: string | null
      signeture: string | null
      position: string | null
      blod_group: string | null
      role: $Enums.In_Role
    }, ExtArgs["result"]["teachers"]>
    composites: {}
  }

  type TeachersGetPayload<S extends boolean | null | undefined | TeachersDefaultArgs> = $Result.GetResult<Prisma.$TeachersPayload, S>

  type TeachersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachersCountAggregateInputType | true
    }

  export interface TeachersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teachers'], meta: { name: 'Teachers' } }
    /**
     * Find zero or one Teachers that matches the filter.
     * @param {TeachersFindUniqueArgs} args - Arguments to find a Teachers
     * @example
     * // Get one Teachers
     * const teachers = await prisma.teachers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachersFindUniqueArgs>(args: SelectSubset<T, TeachersFindUniqueArgs<ExtArgs>>): Prisma__TeachersClient<$Result.GetResult<Prisma.$TeachersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teachers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachersFindUniqueOrThrowArgs} args - Arguments to find a Teachers
     * @example
     * // Get one Teachers
     * const teachers = await prisma.teachers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachersFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachersClient<$Result.GetResult<Prisma.$TeachersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersFindFirstArgs} args - Arguments to find a Teachers
     * @example
     * // Get one Teachers
     * const teachers = await prisma.teachers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachersFindFirstArgs>(args?: SelectSubset<T, TeachersFindFirstArgs<ExtArgs>>): Prisma__TeachersClient<$Result.GetResult<Prisma.$TeachersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teachers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersFindFirstOrThrowArgs} args - Arguments to find a Teachers
     * @example
     * // Get one Teachers
     * const teachers = await prisma.teachers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachersFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachersFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachersClient<$Result.GetResult<Prisma.$TeachersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teachers.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teachers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachersWithIdOnly = await prisma.teachers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachersFindManyArgs>(args?: SelectSubset<T, TeachersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teachers.
     * @param {TeachersCreateArgs} args - Arguments to create a Teachers.
     * @example
     * // Create one Teachers
     * const Teachers = await prisma.teachers.create({
     *   data: {
     *     // ... data to create a Teachers
     *   }
     * })
     * 
     */
    create<T extends TeachersCreateArgs>(args: SelectSubset<T, TeachersCreateArgs<ExtArgs>>): Prisma__TeachersClient<$Result.GetResult<Prisma.$TeachersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeachersCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teachers = await prisma.teachers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachersCreateManyArgs>(args?: SelectSubset<T, TeachersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teachers.
     * @param {TeachersDeleteArgs} args - Arguments to delete one Teachers.
     * @example
     * // Delete one Teachers
     * const Teachers = await prisma.teachers.delete({
     *   where: {
     *     // ... filter to delete one Teachers
     *   }
     * })
     * 
     */
    delete<T extends TeachersDeleteArgs>(args: SelectSubset<T, TeachersDeleteArgs<ExtArgs>>): Prisma__TeachersClient<$Result.GetResult<Prisma.$TeachersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teachers.
     * @param {TeachersUpdateArgs} args - Arguments to update one Teachers.
     * @example
     * // Update one Teachers
     * const teachers = await prisma.teachers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachersUpdateArgs>(args: SelectSubset<T, TeachersUpdateArgs<ExtArgs>>): Prisma__TeachersClient<$Result.GetResult<Prisma.$TeachersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeachersDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teachers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachersDeleteManyArgs>(args?: SelectSubset<T, TeachersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teachers = await prisma.teachers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachersUpdateManyArgs>(args: SelectSubset<T, TeachersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teachers.
     * @param {TeachersUpsertArgs} args - Arguments to update or create a Teachers.
     * @example
     * // Update or create a Teachers
     * const teachers = await prisma.teachers.upsert({
     *   create: {
     *     // ... data to create a Teachers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teachers we want to update
     *   }
     * })
     */
    upsert<T extends TeachersUpsertArgs>(args: SelectSubset<T, TeachersUpsertArgs<ExtArgs>>): Prisma__TeachersClient<$Result.GetResult<Prisma.$TeachersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teachers.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeachersCountArgs>(
      args?: Subset<T, TeachersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeachersAggregateArgs>(args: Subset<T, TeachersAggregateArgs>): Prisma.PrismaPromise<GetTeachersAggregateType<T>>

    /**
     * Group by Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeachersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachersGroupByArgs['orderBy'] }
        : { orderBy?: TeachersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeachersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teachers model
   */
  readonly fields: TeachersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teachers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instutaion<T extends InistutationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InistutationsDefaultArgs<ExtArgs>>): Prisma__InistutationsClient<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teachers model
   */ 
  interface TeachersFieldRefs {
    readonly id: FieldRef<"Teachers", 'String'>
    readonly instutaion_id: FieldRef<"Teachers", 'String'>
    readonly name_eng: FieldRef<"Teachers", 'String'>
    readonly name_bng: FieldRef<"Teachers", 'String'>
    readonly teacher_id: FieldRef<"Teachers", 'String'>
    readonly teacher_enitial: FieldRef<"Teachers", 'String'>
    readonly image: FieldRef<"Teachers", 'String'>
    readonly email: FieldRef<"Teachers", 'String'>
    readonly phone_number: FieldRef<"Teachers", 'String'>
    readonly password: FieldRef<"Teachers", 'String'>
    readonly religion: FieldRef<"Teachers", 'Religion'>
    readonly gender: FieldRef<"Teachers", 'Gender'>
    readonly date_of_birth: FieldRef<"Teachers", 'DateTime'>
    readonly address: FieldRef<"Teachers", 'String'>
    readonly signeture: FieldRef<"Teachers", 'String'>
    readonly position: FieldRef<"Teachers", 'String'>
    readonly blod_group: FieldRef<"Teachers", 'String'>
    readonly role: FieldRef<"Teachers", 'In_Role'>
  }
    

  // Custom InputTypes
  /**
   * Teachers findUnique
   */
  export type TeachersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where: TeachersWhereUniqueInput
  }

  /**
   * Teachers findUniqueOrThrow
   */
  export type TeachersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where: TeachersWhereUniqueInput
  }

  /**
   * Teachers findFirst
   */
  export type TeachersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeachersOrderByWithRelationInput | TeachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeachersScalarFieldEnum | TeachersScalarFieldEnum[]
  }

  /**
   * Teachers findFirstOrThrow
   */
  export type TeachersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeachersOrderByWithRelationInput | TeachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeachersScalarFieldEnum | TeachersScalarFieldEnum[]
  }

  /**
   * Teachers findMany
   */
  export type TeachersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeachersOrderByWithRelationInput | TeachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeachersScalarFieldEnum | TeachersScalarFieldEnum[]
  }

  /**
   * Teachers create
   */
  export type TeachersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
    /**
     * The data needed to create a Teachers.
     */
    data: XOR<TeachersCreateInput, TeachersUncheckedCreateInput>
  }

  /**
   * Teachers createMany
   */
  export type TeachersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeachersCreateManyInput | TeachersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teachers update
   */
  export type TeachersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
    /**
     * The data needed to update a Teachers.
     */
    data: XOR<TeachersUpdateInput, TeachersUncheckedUpdateInput>
    /**
     * Choose, which Teachers to update.
     */
    where: TeachersWhereUniqueInput
  }

  /**
   * Teachers updateMany
   */
  export type TeachersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeachersUpdateManyMutationInput, TeachersUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeachersWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teachers upsert
   */
  export type TeachersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
    /**
     * The filter to search for the Teachers to update in case it exists.
     */
    where: TeachersWhereUniqueInput
    /**
     * In case the Teachers found by the `where` argument doesn't exist, create a new Teachers with this data.
     */
    create: XOR<TeachersCreateInput, TeachersUncheckedCreateInput>
    /**
     * In case the Teachers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachersUpdateInput, TeachersUncheckedUpdateInput>
  }

  /**
   * Teachers delete
   */
  export type TeachersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
    /**
     * Filter which Teachers to delete.
     */
    where: TeachersWhereUniqueInput
  }

  /**
   * Teachers deleteMany
   */
  export type TeachersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeachersWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teachers without action
   */
  export type TeachersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teachers
     */
    select?: TeachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teachers
     */
    omit?: TeachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachersInclude<ExtArgs> | null
  }


  /**
   * Model Students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsMinAggregateOutputType = {
    id: string | null
    instutaion_id: string | null
    class_role: string | null
    name_eng: string | null
    name_bng: string | null
    student_id: string | null
    image: string | null
    email: string | null
    phone_number: string | null
    password: string | null
    religion: $Enums.Religion | null
    gender: $Enums.Gender | null
    date_of_birth: Date | null
    address: string | null
    signeture: string | null
    blod_group: string | null
    role: $Enums.In_Role | null
    status: $Enums.Studen_Status | null
  }

  export type StudentsMaxAggregateOutputType = {
    id: string | null
    instutaion_id: string | null
    class_role: string | null
    name_eng: string | null
    name_bng: string | null
    student_id: string | null
    image: string | null
    email: string | null
    phone_number: string | null
    password: string | null
    religion: $Enums.Religion | null
    gender: $Enums.Gender | null
    date_of_birth: Date | null
    address: string | null
    signeture: string | null
    blod_group: string | null
    role: $Enums.In_Role | null
    status: $Enums.Studen_Status | null
  }

  export type StudentsCountAggregateOutputType = {
    id: number
    instutaion_id: number
    class_role: number
    name_eng: number
    name_bng: number
    student_id: number
    image: number
    email: number
    phone_number: number
    password: number
    religion: number
    gender: number
    date_of_birth: number
    address: number
    signeture: number
    blod_group: number
    role: number
    status: number
    _all: number
  }


  export type StudentsMinAggregateInputType = {
    id?: true
    instutaion_id?: true
    class_role?: true
    name_eng?: true
    name_bng?: true
    student_id?: true
    image?: true
    email?: true
    phone_number?: true
    password?: true
    religion?: true
    gender?: true
    date_of_birth?: true
    address?: true
    signeture?: true
    blod_group?: true
    role?: true
    status?: true
  }

  export type StudentsMaxAggregateInputType = {
    id?: true
    instutaion_id?: true
    class_role?: true
    name_eng?: true
    name_bng?: true
    student_id?: true
    image?: true
    email?: true
    phone_number?: true
    password?: true
    religion?: true
    gender?: true
    date_of_birth?: true
    address?: true
    signeture?: true
    blod_group?: true
    role?: true
    status?: true
  }

  export type StudentsCountAggregateInputType = {
    id?: true
    instutaion_id?: true
    class_role?: true
    name_eng?: true
    name_bng?: true
    student_id?: true
    image?: true
    email?: true
    phone_number?: true
    password?: true
    religion?: true
    gender?: true
    date_of_birth?: true
    address?: true
    signeture?: true
    blod_group?: true
    role?: true
    status?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to aggregate.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type StudentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentsWhereInput
    orderBy?: StudentsOrderByWithAggregationInput | StudentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: StudentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    id: string
    instutaion_id: string
    class_role: string
    name_eng: string
    name_bng: string
    student_id: string
    image: string
    email: string
    phone_number: string
    password: string
    religion: $Enums.Religion
    gender: $Enums.Gender
    date_of_birth: Date
    address: string | null
    signeture: string | null
    blod_group: string | null
    role: $Enums.In_Role
    status: $Enums.Studen_Status
    _count: StudentsCountAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends StudentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type StudentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instutaion_id?: boolean
    class_role?: boolean
    name_eng?: boolean
    name_bng?: boolean
    student_id?: boolean
    image?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    religion?: boolean
    gender?: boolean
    date_of_birth?: boolean
    address?: boolean
    signeture?: boolean
    blod_group?: boolean
    role?: boolean
    status?: boolean
    instutaion?: boolean | InistutationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>



  export type StudentsSelectScalar = {
    id?: boolean
    instutaion_id?: boolean
    class_role?: boolean
    name_eng?: boolean
    name_bng?: boolean
    student_id?: boolean
    image?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    religion?: boolean
    gender?: boolean
    date_of_birth?: boolean
    address?: boolean
    signeture?: boolean
    blod_group?: boolean
    role?: boolean
    status?: boolean
  }

  export type StudentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instutaion_id" | "class_role" | "name_eng" | "name_bng" | "student_id" | "image" | "email" | "phone_number" | "password" | "religion" | "gender" | "date_of_birth" | "address" | "signeture" | "blod_group" | "role" | "status", ExtArgs["result"]["students"]>
  export type StudentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instutaion?: boolean | InistutationsDefaultArgs<ExtArgs>
  }

  export type $StudentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Students"
    objects: {
      instutaion: Prisma.$InistutationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instutaion_id: string
      class_role: string
      name_eng: string
      name_bng: string
      student_id: string
      image: string
      email: string
      phone_number: string
      password: string
      religion: $Enums.Religion
      gender: $Enums.Gender
      date_of_birth: Date
      address: string | null
      signeture: string | null
      blod_group: string | null
      role: $Enums.In_Role
      status: $Enums.Studen_Status
    }, ExtArgs["result"]["students"]>
    composites: {}
  }

  type StudentsGetPayload<S extends boolean | null | undefined | StudentsDefaultArgs> = $Result.GetResult<Prisma.$StudentsPayload, S>

  type StudentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface StudentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Students'], meta: { name: 'Students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {StudentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentsFindUniqueArgs>(args: SelectSubset<T, StudentsFindUniqueArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentsFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentsFindFirstArgs>(args?: SelectSubset<T, StudentsFindFirstArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentsFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentsFindManyArgs>(args?: SelectSubset<T, StudentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Students.
     * @param {StudentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
     */
    create<T extends StudentsCreateArgs>(args: SelectSubset<T, StudentsCreateArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentsCreateManyArgs>(args?: SelectSubset<T, StudentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Students.
     * @param {StudentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
     */
    delete<T extends StudentsDeleteArgs>(args: SelectSubset<T, StudentsDeleteArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Students.
     * @param {StudentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentsUpdateArgs>(args: SelectSubset<T, StudentsUpdateArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentsDeleteManyArgs>(args?: SelectSubset<T, StudentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentsUpdateManyArgs>(args: SelectSubset<T, StudentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Students.
     * @param {StudentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends StudentsUpsertArgs>(args: SelectSubset<T, StudentsUpsertArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentsCountArgs>(
      args?: Subset<T, StudentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentsGroupByArgs['orderBy'] }
        : { orderBy?: StudentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Students model
   */
  readonly fields: StudentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instutaion<T extends InistutationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InistutationsDefaultArgs<ExtArgs>>): Prisma__InistutationsClient<$Result.GetResult<Prisma.$InistutationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Students model
   */ 
  interface StudentsFieldRefs {
    readonly id: FieldRef<"Students", 'String'>
    readonly instutaion_id: FieldRef<"Students", 'String'>
    readonly class_role: FieldRef<"Students", 'String'>
    readonly name_eng: FieldRef<"Students", 'String'>
    readonly name_bng: FieldRef<"Students", 'String'>
    readonly student_id: FieldRef<"Students", 'String'>
    readonly image: FieldRef<"Students", 'String'>
    readonly email: FieldRef<"Students", 'String'>
    readonly phone_number: FieldRef<"Students", 'String'>
    readonly password: FieldRef<"Students", 'String'>
    readonly religion: FieldRef<"Students", 'Religion'>
    readonly gender: FieldRef<"Students", 'Gender'>
    readonly date_of_birth: FieldRef<"Students", 'DateTime'>
    readonly address: FieldRef<"Students", 'String'>
    readonly signeture: FieldRef<"Students", 'String'>
    readonly blod_group: FieldRef<"Students", 'String'>
    readonly role: FieldRef<"Students", 'In_Role'>
    readonly status: FieldRef<"Students", 'Studen_Status'>
  }
    

  // Custom InputTypes
  /**
   * Students findUnique
   */
  export type StudentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students findUniqueOrThrow
   */
  export type StudentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students findFirst
   */
  export type StudentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students findFirstOrThrow
   */
  export type StudentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students findMany
   */
  export type StudentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students create
   */
  export type StudentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Students.
     */
    data: XOR<StudentsCreateInput, StudentsUncheckedCreateInput>
  }

  /**
   * Students createMany
   */
  export type StudentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentsCreateManyInput | StudentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Students update
   */
  export type StudentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Students.
     */
    data: XOR<StudentsUpdateInput, StudentsUncheckedUpdateInput>
    /**
     * Choose, which Students to update.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students updateMany
   */
  export type StudentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentsUpdateManyMutationInput, StudentsUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Students upsert
   */
  export type StudentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Students to update in case it exists.
     */
    where: StudentsWhereUniqueInput
    /**
     * In case the Students found by the `where` argument doesn't exist, create a new Students with this data.
     */
    create: XOR<StudentsCreateInput, StudentsUncheckedCreateInput>
    /**
     * In case the Students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentsUpdateInput, StudentsUncheckedUpdateInput>
  }

  /**
   * Students delete
   */
  export type StudentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter which Students to delete.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students deleteMany
   */
  export type StudentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Students without action
   */
  export type StudentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InistutationsScalarFieldEnum: {
    eiin: 'eiin',
    name_eng: 'name_eng',
    name_bng: 'name_bng',
    founding_date: 'founding_date',
    address: 'address',
    phone_number: 'phone_number',
    email: 'email',
    proof_of_document: 'proof_of_document',
    logo: 'logo',
    type: 'type',
    isVarified: 'isVarified',
    password: 'password'
  };

  export type InistutationsScalarFieldEnum = (typeof InistutationsScalarFieldEnum)[keyof typeof InistutationsScalarFieldEnum]


  export const TeachersScalarFieldEnum: {
    id: 'id',
    instutaion_id: 'instutaion_id',
    name_eng: 'name_eng',
    name_bng: 'name_bng',
    teacher_id: 'teacher_id',
    teacher_enitial: 'teacher_enitial',
    image: 'image',
    email: 'email',
    phone_number: 'phone_number',
    password: 'password',
    religion: 'religion',
    gender: 'gender',
    date_of_birth: 'date_of_birth',
    address: 'address',
    signeture: 'signeture',
    position: 'position',
    blod_group: 'blod_group',
    role: 'role'
  };

  export type TeachersScalarFieldEnum = (typeof TeachersScalarFieldEnum)[keyof typeof TeachersScalarFieldEnum]


  export const StudentsScalarFieldEnum: {
    id: 'id',
    instutaion_id: 'instutaion_id',
    class_role: 'class_role',
    name_eng: 'name_eng',
    name_bng: 'name_bng',
    student_id: 'student_id',
    image: 'image',
    email: 'email',
    phone_number: 'phone_number',
    password: 'password',
    religion: 'religion',
    gender: 'gender',
    date_of_birth: 'date_of_birth',
    address: 'address',
    signeture: 'signeture',
    blod_group: 'blod_group',
    role: 'role',
    status: 'status'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const InistutationsOrderByRelevanceFieldEnum: {
    eiin: 'eiin',
    name_eng: 'name_eng',
    name_bng: 'name_bng',
    address: 'address',
    phone_number: 'phone_number',
    email: 'email',
    proof_of_document: 'proof_of_document',
    logo: 'logo',
    password: 'password'
  };

  export type InistutationsOrderByRelevanceFieldEnum = (typeof InistutationsOrderByRelevanceFieldEnum)[keyof typeof InistutationsOrderByRelevanceFieldEnum]


  export const TeachersOrderByRelevanceFieldEnum: {
    id: 'id',
    instutaion_id: 'instutaion_id',
    name_eng: 'name_eng',
    name_bng: 'name_bng',
    teacher_id: 'teacher_id',
    teacher_enitial: 'teacher_enitial',
    image: 'image',
    email: 'email',
    phone_number: 'phone_number',
    password: 'password',
    address: 'address',
    signeture: 'signeture',
    position: 'position',
    blod_group: 'blod_group'
  };

  export type TeachersOrderByRelevanceFieldEnum = (typeof TeachersOrderByRelevanceFieldEnum)[keyof typeof TeachersOrderByRelevanceFieldEnum]


  export const StudentsOrderByRelevanceFieldEnum: {
    id: 'id',
    instutaion_id: 'instutaion_id',
    class_role: 'class_role',
    name_eng: 'name_eng',
    name_bng: 'name_bng',
    student_id: 'student_id',
    image: 'image',
    email: 'email',
    phone_number: 'phone_number',
    password: 'password',
    address: 'address',
    signeture: 'signeture',
    blod_group: 'blod_group'
  };

  export type StudentsOrderByRelevanceFieldEnum = (typeof StudentsOrderByRelevanceFieldEnum)[keyof typeof StudentsOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Instutation_type'
   */
  export type EnumInstutation_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Instutation_type'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Religion'
   */
  export type EnumReligionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Religion'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'In_Role'
   */
  export type EnumIn_RoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'In_Role'>
    


  /**
   * Reference to a field of type 'Studen_Status'
   */
  export type EnumStuden_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Studen_Status'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type InistutationsWhereInput = {
    AND?: InistutationsWhereInput | InistutationsWhereInput[]
    OR?: InistutationsWhereInput[]
    NOT?: InistutationsWhereInput | InistutationsWhereInput[]
    eiin?: StringFilter<"Inistutations"> | string
    name_eng?: StringFilter<"Inistutations"> | string
    name_bng?: StringFilter<"Inistutations"> | string
    founding_date?: DateTimeNullableFilter<"Inistutations"> | Date | string | null
    address?: StringNullableFilter<"Inistutations"> | string | null
    phone_number?: StringFilter<"Inistutations"> | string
    email?: StringFilter<"Inistutations"> | string
    proof_of_document?: StringNullableFilter<"Inistutations"> | string | null
    logo?: StringNullableFilter<"Inistutations"> | string | null
    type?: EnumInstutation_typeFilter<"Inistutations"> | $Enums.Instutation_type
    isVarified?: BoolFilter<"Inistutations"> | boolean
    password?: StringFilter<"Inistutations"> | string
    teachers?: TeachersListRelationFilter
    students?: StudentsListRelationFilter
  }

  export type InistutationsOrderByWithRelationInput = {
    eiin?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    founding_date?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    proof_of_document?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    type?: SortOrder
    isVarified?: SortOrder
    password?: SortOrder
    teachers?: TeachersOrderByRelationAggregateInput
    students?: StudentsOrderByRelationAggregateInput
    _relevance?: InistutationsOrderByRelevanceInput
  }

  export type InistutationsWhereUniqueInput = Prisma.AtLeast<{
    eiin?: string
    AND?: InistutationsWhereInput | InistutationsWhereInput[]
    OR?: InistutationsWhereInput[]
    NOT?: InistutationsWhereInput | InistutationsWhereInput[]
    name_eng?: StringFilter<"Inistutations"> | string
    name_bng?: StringFilter<"Inistutations"> | string
    founding_date?: DateTimeNullableFilter<"Inistutations"> | Date | string | null
    address?: StringNullableFilter<"Inistutations"> | string | null
    phone_number?: StringFilter<"Inistutations"> | string
    email?: StringFilter<"Inistutations"> | string
    proof_of_document?: StringNullableFilter<"Inistutations"> | string | null
    logo?: StringNullableFilter<"Inistutations"> | string | null
    type?: EnumInstutation_typeFilter<"Inistutations"> | $Enums.Instutation_type
    isVarified?: BoolFilter<"Inistutations"> | boolean
    password?: StringFilter<"Inistutations"> | string
    teachers?: TeachersListRelationFilter
    students?: StudentsListRelationFilter
  }, "eiin">

  export type InistutationsOrderByWithAggregationInput = {
    eiin?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    founding_date?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    proof_of_document?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    type?: SortOrder
    isVarified?: SortOrder
    password?: SortOrder
    _count?: InistutationsCountOrderByAggregateInput
    _max?: InistutationsMaxOrderByAggregateInput
    _min?: InistutationsMinOrderByAggregateInput
  }

  export type InistutationsScalarWhereWithAggregatesInput = {
    AND?: InistutationsScalarWhereWithAggregatesInput | InistutationsScalarWhereWithAggregatesInput[]
    OR?: InistutationsScalarWhereWithAggregatesInput[]
    NOT?: InistutationsScalarWhereWithAggregatesInput | InistutationsScalarWhereWithAggregatesInput[]
    eiin?: StringWithAggregatesFilter<"Inistutations"> | string
    name_eng?: StringWithAggregatesFilter<"Inistutations"> | string
    name_bng?: StringWithAggregatesFilter<"Inistutations"> | string
    founding_date?: DateTimeNullableWithAggregatesFilter<"Inistutations"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"Inistutations"> | string | null
    phone_number?: StringWithAggregatesFilter<"Inistutations"> | string
    email?: StringWithAggregatesFilter<"Inistutations"> | string
    proof_of_document?: StringNullableWithAggregatesFilter<"Inistutations"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Inistutations"> | string | null
    type?: EnumInstutation_typeWithAggregatesFilter<"Inistutations"> | $Enums.Instutation_type
    isVarified?: BoolWithAggregatesFilter<"Inistutations"> | boolean
    password?: StringWithAggregatesFilter<"Inistutations"> | string
  }

  export type TeachersWhereInput = {
    AND?: TeachersWhereInput | TeachersWhereInput[]
    OR?: TeachersWhereInput[]
    NOT?: TeachersWhereInput | TeachersWhereInput[]
    id?: StringFilter<"Teachers"> | string
    instutaion_id?: StringFilter<"Teachers"> | string
    name_eng?: StringFilter<"Teachers"> | string
    name_bng?: StringFilter<"Teachers"> | string
    teacher_id?: StringFilter<"Teachers"> | string
    teacher_enitial?: StringFilter<"Teachers"> | string
    image?: StringFilter<"Teachers"> | string
    email?: StringFilter<"Teachers"> | string
    phone_number?: StringFilter<"Teachers"> | string
    password?: StringFilter<"Teachers"> | string
    religion?: EnumReligionFilter<"Teachers"> | $Enums.Religion
    gender?: EnumGenderFilter<"Teachers"> | $Enums.Gender
    date_of_birth?: DateTimeFilter<"Teachers"> | Date | string
    address?: StringNullableFilter<"Teachers"> | string | null
    signeture?: StringNullableFilter<"Teachers"> | string | null
    position?: StringNullableFilter<"Teachers"> | string | null
    blod_group?: StringNullableFilter<"Teachers"> | string | null
    role?: EnumIn_RoleFilter<"Teachers"> | $Enums.In_Role
    instutaion?: XOR<InistutationsScalarRelationFilter, InistutationsWhereInput>
  }

  export type TeachersOrderByWithRelationInput = {
    id?: SortOrder
    instutaion_id?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    teacher_id?: SortOrder
    teacher_enitial?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrderInput | SortOrder
    signeture?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    blod_group?: SortOrderInput | SortOrder
    role?: SortOrder
    instutaion?: InistutationsOrderByWithRelationInput
    _relevance?: TeachersOrderByRelevanceInput
  }

  export type TeachersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeachersWhereInput | TeachersWhereInput[]
    OR?: TeachersWhereInput[]
    NOT?: TeachersWhereInput | TeachersWhereInput[]
    instutaion_id?: StringFilter<"Teachers"> | string
    name_eng?: StringFilter<"Teachers"> | string
    name_bng?: StringFilter<"Teachers"> | string
    teacher_id?: StringFilter<"Teachers"> | string
    teacher_enitial?: StringFilter<"Teachers"> | string
    image?: StringFilter<"Teachers"> | string
    email?: StringFilter<"Teachers"> | string
    phone_number?: StringFilter<"Teachers"> | string
    password?: StringFilter<"Teachers"> | string
    religion?: EnumReligionFilter<"Teachers"> | $Enums.Religion
    gender?: EnumGenderFilter<"Teachers"> | $Enums.Gender
    date_of_birth?: DateTimeFilter<"Teachers"> | Date | string
    address?: StringNullableFilter<"Teachers"> | string | null
    signeture?: StringNullableFilter<"Teachers"> | string | null
    position?: StringNullableFilter<"Teachers"> | string | null
    blod_group?: StringNullableFilter<"Teachers"> | string | null
    role?: EnumIn_RoleFilter<"Teachers"> | $Enums.In_Role
    instutaion?: XOR<InistutationsScalarRelationFilter, InistutationsWhereInput>
  }, "id">

  export type TeachersOrderByWithAggregationInput = {
    id?: SortOrder
    instutaion_id?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    teacher_id?: SortOrder
    teacher_enitial?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrderInput | SortOrder
    signeture?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    blod_group?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: TeachersCountOrderByAggregateInput
    _max?: TeachersMaxOrderByAggregateInput
    _min?: TeachersMinOrderByAggregateInput
  }

  export type TeachersScalarWhereWithAggregatesInput = {
    AND?: TeachersScalarWhereWithAggregatesInput | TeachersScalarWhereWithAggregatesInput[]
    OR?: TeachersScalarWhereWithAggregatesInput[]
    NOT?: TeachersScalarWhereWithAggregatesInput | TeachersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teachers"> | string
    instutaion_id?: StringWithAggregatesFilter<"Teachers"> | string
    name_eng?: StringWithAggregatesFilter<"Teachers"> | string
    name_bng?: StringWithAggregatesFilter<"Teachers"> | string
    teacher_id?: StringWithAggregatesFilter<"Teachers"> | string
    teacher_enitial?: StringWithAggregatesFilter<"Teachers"> | string
    image?: StringWithAggregatesFilter<"Teachers"> | string
    email?: StringWithAggregatesFilter<"Teachers"> | string
    phone_number?: StringWithAggregatesFilter<"Teachers"> | string
    password?: StringWithAggregatesFilter<"Teachers"> | string
    religion?: EnumReligionWithAggregatesFilter<"Teachers"> | $Enums.Religion
    gender?: EnumGenderWithAggregatesFilter<"Teachers"> | $Enums.Gender
    date_of_birth?: DateTimeWithAggregatesFilter<"Teachers"> | Date | string
    address?: StringNullableWithAggregatesFilter<"Teachers"> | string | null
    signeture?: StringNullableWithAggregatesFilter<"Teachers"> | string | null
    position?: StringNullableWithAggregatesFilter<"Teachers"> | string | null
    blod_group?: StringNullableWithAggregatesFilter<"Teachers"> | string | null
    role?: EnumIn_RoleWithAggregatesFilter<"Teachers"> | $Enums.In_Role
  }

  export type StudentsWhereInput = {
    AND?: StudentsWhereInput | StudentsWhereInput[]
    OR?: StudentsWhereInput[]
    NOT?: StudentsWhereInput | StudentsWhereInput[]
    id?: StringFilter<"Students"> | string
    instutaion_id?: StringFilter<"Students"> | string
    class_role?: StringFilter<"Students"> | string
    name_eng?: StringFilter<"Students"> | string
    name_bng?: StringFilter<"Students"> | string
    student_id?: StringFilter<"Students"> | string
    image?: StringFilter<"Students"> | string
    email?: StringFilter<"Students"> | string
    phone_number?: StringFilter<"Students"> | string
    password?: StringFilter<"Students"> | string
    religion?: EnumReligionFilter<"Students"> | $Enums.Religion
    gender?: EnumGenderFilter<"Students"> | $Enums.Gender
    date_of_birth?: DateTimeFilter<"Students"> | Date | string
    address?: StringNullableFilter<"Students"> | string | null
    signeture?: StringNullableFilter<"Students"> | string | null
    blod_group?: StringNullableFilter<"Students"> | string | null
    role?: EnumIn_RoleFilter<"Students"> | $Enums.In_Role
    status?: EnumStuden_StatusFilter<"Students"> | $Enums.Studen_Status
    instutaion?: XOR<InistutationsScalarRelationFilter, InistutationsWhereInput>
  }

  export type StudentsOrderByWithRelationInput = {
    id?: SortOrder
    instutaion_id?: SortOrder
    class_role?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    student_id?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrderInput | SortOrder
    signeture?: SortOrderInput | SortOrder
    blod_group?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    instutaion?: InistutationsOrderByWithRelationInput
    _relevance?: StudentsOrderByRelevanceInput
  }

  export type StudentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentsWhereInput | StudentsWhereInput[]
    OR?: StudentsWhereInput[]
    NOT?: StudentsWhereInput | StudentsWhereInput[]
    instutaion_id?: StringFilter<"Students"> | string
    class_role?: StringFilter<"Students"> | string
    name_eng?: StringFilter<"Students"> | string
    name_bng?: StringFilter<"Students"> | string
    student_id?: StringFilter<"Students"> | string
    image?: StringFilter<"Students"> | string
    email?: StringFilter<"Students"> | string
    phone_number?: StringFilter<"Students"> | string
    password?: StringFilter<"Students"> | string
    religion?: EnumReligionFilter<"Students"> | $Enums.Religion
    gender?: EnumGenderFilter<"Students"> | $Enums.Gender
    date_of_birth?: DateTimeFilter<"Students"> | Date | string
    address?: StringNullableFilter<"Students"> | string | null
    signeture?: StringNullableFilter<"Students"> | string | null
    blod_group?: StringNullableFilter<"Students"> | string | null
    role?: EnumIn_RoleFilter<"Students"> | $Enums.In_Role
    status?: EnumStuden_StatusFilter<"Students"> | $Enums.Studen_Status
    instutaion?: XOR<InistutationsScalarRelationFilter, InistutationsWhereInput>
  }, "id">

  export type StudentsOrderByWithAggregationInput = {
    id?: SortOrder
    instutaion_id?: SortOrder
    class_role?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    student_id?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrderInput | SortOrder
    signeture?: SortOrderInput | SortOrder
    blod_group?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    _count?: StudentsCountOrderByAggregateInput
    _max?: StudentsMaxOrderByAggregateInput
    _min?: StudentsMinOrderByAggregateInput
  }

  export type StudentsScalarWhereWithAggregatesInput = {
    AND?: StudentsScalarWhereWithAggregatesInput | StudentsScalarWhereWithAggregatesInput[]
    OR?: StudentsScalarWhereWithAggregatesInput[]
    NOT?: StudentsScalarWhereWithAggregatesInput | StudentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Students"> | string
    instutaion_id?: StringWithAggregatesFilter<"Students"> | string
    class_role?: StringWithAggregatesFilter<"Students"> | string
    name_eng?: StringWithAggregatesFilter<"Students"> | string
    name_bng?: StringWithAggregatesFilter<"Students"> | string
    student_id?: StringWithAggregatesFilter<"Students"> | string
    image?: StringWithAggregatesFilter<"Students"> | string
    email?: StringWithAggregatesFilter<"Students"> | string
    phone_number?: StringWithAggregatesFilter<"Students"> | string
    password?: StringWithAggregatesFilter<"Students"> | string
    religion?: EnumReligionWithAggregatesFilter<"Students"> | $Enums.Religion
    gender?: EnumGenderWithAggregatesFilter<"Students"> | $Enums.Gender
    date_of_birth?: DateTimeWithAggregatesFilter<"Students"> | Date | string
    address?: StringNullableWithAggregatesFilter<"Students"> | string | null
    signeture?: StringNullableWithAggregatesFilter<"Students"> | string | null
    blod_group?: StringNullableWithAggregatesFilter<"Students"> | string | null
    role?: EnumIn_RoleWithAggregatesFilter<"Students"> | $Enums.In_Role
    status?: EnumStuden_StatusWithAggregatesFilter<"Students"> | $Enums.Studen_Status
  }

  export type InistutationsCreateInput = {
    eiin?: string
    name_eng: string
    name_bng: string
    founding_date?: Date | string | null
    address?: string | null
    phone_number: string
    email: string
    proof_of_document?: string | null
    logo?: string | null
    type?: $Enums.Instutation_type
    isVarified?: boolean
    password: string
    teachers?: TeachersCreateNestedManyWithoutInstutaionInput
    students?: StudentsCreateNestedManyWithoutInstutaionInput
  }

  export type InistutationsUncheckedCreateInput = {
    eiin?: string
    name_eng: string
    name_bng: string
    founding_date?: Date | string | null
    address?: string | null
    phone_number: string
    email: string
    proof_of_document?: string | null
    logo?: string | null
    type?: $Enums.Instutation_type
    isVarified?: boolean
    password: string
    teachers?: TeachersUncheckedCreateNestedManyWithoutInstutaionInput
    students?: StudentsUncheckedCreateNestedManyWithoutInstutaionInput
  }

  export type InistutationsUpdateInput = {
    eiin?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    founding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    proof_of_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInstutation_typeFieldUpdateOperationsInput | $Enums.Instutation_type
    isVarified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    teachers?: TeachersUpdateManyWithoutInstutaionNestedInput
    students?: StudentsUpdateManyWithoutInstutaionNestedInput
  }

  export type InistutationsUncheckedUpdateInput = {
    eiin?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    founding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    proof_of_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInstutation_typeFieldUpdateOperationsInput | $Enums.Instutation_type
    isVarified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    teachers?: TeachersUncheckedUpdateManyWithoutInstutaionNestedInput
    students?: StudentsUncheckedUpdateManyWithoutInstutaionNestedInput
  }

  export type InistutationsCreateManyInput = {
    eiin?: string
    name_eng: string
    name_bng: string
    founding_date?: Date | string | null
    address?: string | null
    phone_number: string
    email: string
    proof_of_document?: string | null
    logo?: string | null
    type?: $Enums.Instutation_type
    isVarified?: boolean
    password: string
  }

  export type InistutationsUpdateManyMutationInput = {
    eiin?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    founding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    proof_of_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInstutation_typeFieldUpdateOperationsInput | $Enums.Instutation_type
    isVarified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
  }

  export type InistutationsUncheckedUpdateManyInput = {
    eiin?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    founding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    proof_of_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInstutation_typeFieldUpdateOperationsInput | $Enums.Instutation_type
    isVarified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TeachersCreateInput = {
    id?: string
    name_eng: string
    name_bng: string
    teacher_id: string
    teacher_enitial: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    position?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
    instutaion: InistutationsCreateNestedOneWithoutTeachersInput
  }

  export type TeachersUncheckedCreateInput = {
    id?: string
    instutaion_id: string
    name_eng: string
    name_bng: string
    teacher_id: string
    teacher_enitial: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    position?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
  }

  export type TeachersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_enitial?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
    instutaion?: InistutationsUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeachersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instutaion_id?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_enitial?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
  }

  export type TeachersCreateManyInput = {
    id?: string
    instutaion_id: string
    name_eng: string
    name_bng: string
    teacher_id: string
    teacher_enitial: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    position?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
  }

  export type TeachersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_enitial?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
  }

  export type TeachersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    instutaion_id?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_enitial?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
  }

  export type StudentsCreateInput = {
    id?: string
    class_role: string
    name_eng: string
    name_bng: string
    student_id: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
    status?: $Enums.Studen_Status
    instutaion: InistutationsCreateNestedOneWithoutStudentsInput
  }

  export type StudentsUncheckedCreateInput = {
    id?: string
    instutaion_id: string
    class_role: string
    name_eng: string
    name_bng: string
    student_id: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
    status?: $Enums.Studen_Status
  }

  export type StudentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_role?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
    status?: EnumStuden_StatusFieldUpdateOperationsInput | $Enums.Studen_Status
    instutaion?: InistutationsUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instutaion_id?: StringFieldUpdateOperationsInput | string
    class_role?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
    status?: EnumStuden_StatusFieldUpdateOperationsInput | $Enums.Studen_Status
  }

  export type StudentsCreateManyInput = {
    id?: string
    instutaion_id: string
    class_role: string
    name_eng: string
    name_bng: string
    student_id: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
    status?: $Enums.Studen_Status
  }

  export type StudentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_role?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
    status?: EnumStuden_StatusFieldUpdateOperationsInput | $Enums.Studen_Status
  }

  export type StudentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    instutaion_id?: StringFieldUpdateOperationsInput | string
    class_role?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
    status?: EnumStuden_StatusFieldUpdateOperationsInput | $Enums.Studen_Status
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumInstutation_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Instutation_type | EnumInstutation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Instutation_type[]
    notIn?: $Enums.Instutation_type[]
    not?: NestedEnumInstutation_typeFilter<$PrismaModel> | $Enums.Instutation_type
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TeachersListRelationFilter = {
    every?: TeachersWhereInput
    some?: TeachersWhereInput
    none?: TeachersWhereInput
  }

  export type StudentsListRelationFilter = {
    every?: StudentsWhereInput
    some?: StudentsWhereInput
    none?: StudentsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeachersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InistutationsOrderByRelevanceInput = {
    fields: InistutationsOrderByRelevanceFieldEnum | InistutationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InistutationsCountOrderByAggregateInput = {
    eiin?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    founding_date?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    proof_of_document?: SortOrder
    logo?: SortOrder
    type?: SortOrder
    isVarified?: SortOrder
    password?: SortOrder
  }

  export type InistutationsMaxOrderByAggregateInput = {
    eiin?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    founding_date?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    proof_of_document?: SortOrder
    logo?: SortOrder
    type?: SortOrder
    isVarified?: SortOrder
    password?: SortOrder
  }

  export type InistutationsMinOrderByAggregateInput = {
    eiin?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    founding_date?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    proof_of_document?: SortOrder
    logo?: SortOrder
    type?: SortOrder
    isVarified?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumInstutation_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Instutation_type | EnumInstutation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Instutation_type[]
    notIn?: $Enums.Instutation_type[]
    not?: NestedEnumInstutation_typeWithAggregatesFilter<$PrismaModel> | $Enums.Instutation_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstutation_typeFilter<$PrismaModel>
    _max?: NestedEnumInstutation_typeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumReligionFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | EnumReligionFieldRefInput<$PrismaModel>
    in?: $Enums.Religion[]
    notIn?: $Enums.Religion[]
    not?: NestedEnumReligionFilter<$PrismaModel> | $Enums.Religion
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumIn_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.In_Role | EnumIn_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.In_Role[]
    notIn?: $Enums.In_Role[]
    not?: NestedEnumIn_RoleFilter<$PrismaModel> | $Enums.In_Role
  }

  export type InistutationsScalarRelationFilter = {
    is?: InistutationsWhereInput
    isNot?: InistutationsWhereInput
  }

  export type TeachersOrderByRelevanceInput = {
    fields: TeachersOrderByRelevanceFieldEnum | TeachersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeachersCountOrderByAggregateInput = {
    id?: SortOrder
    instutaion_id?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    teacher_id?: SortOrder
    teacher_enitial?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrder
    signeture?: SortOrder
    position?: SortOrder
    blod_group?: SortOrder
    role?: SortOrder
  }

  export type TeachersMaxOrderByAggregateInput = {
    id?: SortOrder
    instutaion_id?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    teacher_id?: SortOrder
    teacher_enitial?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrder
    signeture?: SortOrder
    position?: SortOrder
    blod_group?: SortOrder
    role?: SortOrder
  }

  export type TeachersMinOrderByAggregateInput = {
    id?: SortOrder
    instutaion_id?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    teacher_id?: SortOrder
    teacher_enitial?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrder
    signeture?: SortOrder
    position?: SortOrder
    blod_group?: SortOrder
    role?: SortOrder
  }

  export type EnumReligionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | EnumReligionFieldRefInput<$PrismaModel>
    in?: $Enums.Religion[]
    notIn?: $Enums.Religion[]
    not?: NestedEnumReligionWithAggregatesFilter<$PrismaModel> | $Enums.Religion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReligionFilter<$PrismaModel>
    _max?: NestedEnumReligionFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumIn_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.In_Role | EnumIn_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.In_Role[]
    notIn?: $Enums.In_Role[]
    not?: NestedEnumIn_RoleWithAggregatesFilter<$PrismaModel> | $Enums.In_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIn_RoleFilter<$PrismaModel>
    _max?: NestedEnumIn_RoleFilter<$PrismaModel>
  }

  export type EnumStuden_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Studen_Status | EnumStuden_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Studen_Status[]
    notIn?: $Enums.Studen_Status[]
    not?: NestedEnumStuden_StatusFilter<$PrismaModel> | $Enums.Studen_Status
  }

  export type StudentsOrderByRelevanceInput = {
    fields: StudentsOrderByRelevanceFieldEnum | StudentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentsCountOrderByAggregateInput = {
    id?: SortOrder
    instutaion_id?: SortOrder
    class_role?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    student_id?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrder
    signeture?: SortOrder
    blod_group?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type StudentsMaxOrderByAggregateInput = {
    id?: SortOrder
    instutaion_id?: SortOrder
    class_role?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    student_id?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrder
    signeture?: SortOrder
    blod_group?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type StudentsMinOrderByAggregateInput = {
    id?: SortOrder
    instutaion_id?: SortOrder
    class_role?: SortOrder
    name_eng?: SortOrder
    name_bng?: SortOrder
    student_id?: SortOrder
    image?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrder
    signeture?: SortOrder
    blod_group?: SortOrder
    role?: SortOrder
    status?: SortOrder
  }

  export type EnumStuden_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Studen_Status | EnumStuden_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Studen_Status[]
    notIn?: $Enums.Studen_Status[]
    not?: NestedEnumStuden_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Studen_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStuden_StatusFilter<$PrismaModel>
    _max?: NestedEnumStuden_StatusFilter<$PrismaModel>
  }

  export type TeachersCreateNestedManyWithoutInstutaionInput = {
    create?: XOR<TeachersCreateWithoutInstutaionInput, TeachersUncheckedCreateWithoutInstutaionInput> | TeachersCreateWithoutInstutaionInput[] | TeachersUncheckedCreateWithoutInstutaionInput[]
    connectOrCreate?: TeachersCreateOrConnectWithoutInstutaionInput | TeachersCreateOrConnectWithoutInstutaionInput[]
    createMany?: TeachersCreateManyInstutaionInputEnvelope
    connect?: TeachersWhereUniqueInput | TeachersWhereUniqueInput[]
  }

  export type StudentsCreateNestedManyWithoutInstutaionInput = {
    create?: XOR<StudentsCreateWithoutInstutaionInput, StudentsUncheckedCreateWithoutInstutaionInput> | StudentsCreateWithoutInstutaionInput[] | StudentsUncheckedCreateWithoutInstutaionInput[]
    connectOrCreate?: StudentsCreateOrConnectWithoutInstutaionInput | StudentsCreateOrConnectWithoutInstutaionInput[]
    createMany?: StudentsCreateManyInstutaionInputEnvelope
    connect?: StudentsWhereUniqueInput | StudentsWhereUniqueInput[]
  }

  export type TeachersUncheckedCreateNestedManyWithoutInstutaionInput = {
    create?: XOR<TeachersCreateWithoutInstutaionInput, TeachersUncheckedCreateWithoutInstutaionInput> | TeachersCreateWithoutInstutaionInput[] | TeachersUncheckedCreateWithoutInstutaionInput[]
    connectOrCreate?: TeachersCreateOrConnectWithoutInstutaionInput | TeachersCreateOrConnectWithoutInstutaionInput[]
    createMany?: TeachersCreateManyInstutaionInputEnvelope
    connect?: TeachersWhereUniqueInput | TeachersWhereUniqueInput[]
  }

  export type StudentsUncheckedCreateNestedManyWithoutInstutaionInput = {
    create?: XOR<StudentsCreateWithoutInstutaionInput, StudentsUncheckedCreateWithoutInstutaionInput> | StudentsCreateWithoutInstutaionInput[] | StudentsUncheckedCreateWithoutInstutaionInput[]
    connectOrCreate?: StudentsCreateOrConnectWithoutInstutaionInput | StudentsCreateOrConnectWithoutInstutaionInput[]
    createMany?: StudentsCreateManyInstutaionInputEnvelope
    connect?: StudentsWhereUniqueInput | StudentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumInstutation_typeFieldUpdateOperationsInput = {
    set?: $Enums.Instutation_type
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TeachersUpdateManyWithoutInstutaionNestedInput = {
    create?: XOR<TeachersCreateWithoutInstutaionInput, TeachersUncheckedCreateWithoutInstutaionInput> | TeachersCreateWithoutInstutaionInput[] | TeachersUncheckedCreateWithoutInstutaionInput[]
    connectOrCreate?: TeachersCreateOrConnectWithoutInstutaionInput | TeachersCreateOrConnectWithoutInstutaionInput[]
    upsert?: TeachersUpsertWithWhereUniqueWithoutInstutaionInput | TeachersUpsertWithWhereUniqueWithoutInstutaionInput[]
    createMany?: TeachersCreateManyInstutaionInputEnvelope
    set?: TeachersWhereUniqueInput | TeachersWhereUniqueInput[]
    disconnect?: TeachersWhereUniqueInput | TeachersWhereUniqueInput[]
    delete?: TeachersWhereUniqueInput | TeachersWhereUniqueInput[]
    connect?: TeachersWhereUniqueInput | TeachersWhereUniqueInput[]
    update?: TeachersUpdateWithWhereUniqueWithoutInstutaionInput | TeachersUpdateWithWhereUniqueWithoutInstutaionInput[]
    updateMany?: TeachersUpdateManyWithWhereWithoutInstutaionInput | TeachersUpdateManyWithWhereWithoutInstutaionInput[]
    deleteMany?: TeachersScalarWhereInput | TeachersScalarWhereInput[]
  }

  export type StudentsUpdateManyWithoutInstutaionNestedInput = {
    create?: XOR<StudentsCreateWithoutInstutaionInput, StudentsUncheckedCreateWithoutInstutaionInput> | StudentsCreateWithoutInstutaionInput[] | StudentsUncheckedCreateWithoutInstutaionInput[]
    connectOrCreate?: StudentsCreateOrConnectWithoutInstutaionInput | StudentsCreateOrConnectWithoutInstutaionInput[]
    upsert?: StudentsUpsertWithWhereUniqueWithoutInstutaionInput | StudentsUpsertWithWhereUniqueWithoutInstutaionInput[]
    createMany?: StudentsCreateManyInstutaionInputEnvelope
    set?: StudentsWhereUniqueInput | StudentsWhereUniqueInput[]
    disconnect?: StudentsWhereUniqueInput | StudentsWhereUniqueInput[]
    delete?: StudentsWhereUniqueInput | StudentsWhereUniqueInput[]
    connect?: StudentsWhereUniqueInput | StudentsWhereUniqueInput[]
    update?: StudentsUpdateWithWhereUniqueWithoutInstutaionInput | StudentsUpdateWithWhereUniqueWithoutInstutaionInput[]
    updateMany?: StudentsUpdateManyWithWhereWithoutInstutaionInput | StudentsUpdateManyWithWhereWithoutInstutaionInput[]
    deleteMany?: StudentsScalarWhereInput | StudentsScalarWhereInput[]
  }

  export type TeachersUncheckedUpdateManyWithoutInstutaionNestedInput = {
    create?: XOR<TeachersCreateWithoutInstutaionInput, TeachersUncheckedCreateWithoutInstutaionInput> | TeachersCreateWithoutInstutaionInput[] | TeachersUncheckedCreateWithoutInstutaionInput[]
    connectOrCreate?: TeachersCreateOrConnectWithoutInstutaionInput | TeachersCreateOrConnectWithoutInstutaionInput[]
    upsert?: TeachersUpsertWithWhereUniqueWithoutInstutaionInput | TeachersUpsertWithWhereUniqueWithoutInstutaionInput[]
    createMany?: TeachersCreateManyInstutaionInputEnvelope
    set?: TeachersWhereUniqueInput | TeachersWhereUniqueInput[]
    disconnect?: TeachersWhereUniqueInput | TeachersWhereUniqueInput[]
    delete?: TeachersWhereUniqueInput | TeachersWhereUniqueInput[]
    connect?: TeachersWhereUniqueInput | TeachersWhereUniqueInput[]
    update?: TeachersUpdateWithWhereUniqueWithoutInstutaionInput | TeachersUpdateWithWhereUniqueWithoutInstutaionInput[]
    updateMany?: TeachersUpdateManyWithWhereWithoutInstutaionInput | TeachersUpdateManyWithWhereWithoutInstutaionInput[]
    deleteMany?: TeachersScalarWhereInput | TeachersScalarWhereInput[]
  }

  export type StudentsUncheckedUpdateManyWithoutInstutaionNestedInput = {
    create?: XOR<StudentsCreateWithoutInstutaionInput, StudentsUncheckedCreateWithoutInstutaionInput> | StudentsCreateWithoutInstutaionInput[] | StudentsUncheckedCreateWithoutInstutaionInput[]
    connectOrCreate?: StudentsCreateOrConnectWithoutInstutaionInput | StudentsCreateOrConnectWithoutInstutaionInput[]
    upsert?: StudentsUpsertWithWhereUniqueWithoutInstutaionInput | StudentsUpsertWithWhereUniqueWithoutInstutaionInput[]
    createMany?: StudentsCreateManyInstutaionInputEnvelope
    set?: StudentsWhereUniqueInput | StudentsWhereUniqueInput[]
    disconnect?: StudentsWhereUniqueInput | StudentsWhereUniqueInput[]
    delete?: StudentsWhereUniqueInput | StudentsWhereUniqueInput[]
    connect?: StudentsWhereUniqueInput | StudentsWhereUniqueInput[]
    update?: StudentsUpdateWithWhereUniqueWithoutInstutaionInput | StudentsUpdateWithWhereUniqueWithoutInstutaionInput[]
    updateMany?: StudentsUpdateManyWithWhereWithoutInstutaionInput | StudentsUpdateManyWithWhereWithoutInstutaionInput[]
    deleteMany?: StudentsScalarWhereInput | StudentsScalarWhereInput[]
  }

  export type InistutationsCreateNestedOneWithoutTeachersInput = {
    create?: XOR<InistutationsCreateWithoutTeachersInput, InistutationsUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: InistutationsCreateOrConnectWithoutTeachersInput
    connect?: InistutationsWhereUniqueInput
  }

  export type EnumReligionFieldUpdateOperationsInput = {
    set?: $Enums.Religion
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumIn_RoleFieldUpdateOperationsInput = {
    set?: $Enums.In_Role
  }

  export type InistutationsUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<InistutationsCreateWithoutTeachersInput, InistutationsUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: InistutationsCreateOrConnectWithoutTeachersInput
    upsert?: InistutationsUpsertWithoutTeachersInput
    connect?: InistutationsWhereUniqueInput
    update?: XOR<XOR<InistutationsUpdateToOneWithWhereWithoutTeachersInput, InistutationsUpdateWithoutTeachersInput>, InistutationsUncheckedUpdateWithoutTeachersInput>
  }

  export type InistutationsCreateNestedOneWithoutStudentsInput = {
    create?: XOR<InistutationsCreateWithoutStudentsInput, InistutationsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: InistutationsCreateOrConnectWithoutStudentsInput
    connect?: InistutationsWhereUniqueInput
  }

  export type EnumStuden_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Studen_Status
  }

  export type InistutationsUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<InistutationsCreateWithoutStudentsInput, InistutationsUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: InistutationsCreateOrConnectWithoutStudentsInput
    upsert?: InistutationsUpsertWithoutStudentsInput
    connect?: InistutationsWhereUniqueInput
    update?: XOR<XOR<InistutationsUpdateToOneWithWhereWithoutStudentsInput, InistutationsUpdateWithoutStudentsInput>, InistutationsUncheckedUpdateWithoutStudentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumInstutation_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.Instutation_type | EnumInstutation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Instutation_type[]
    notIn?: $Enums.Instutation_type[]
    not?: NestedEnumInstutation_typeFilter<$PrismaModel> | $Enums.Instutation_type
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumInstutation_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Instutation_type | EnumInstutation_typeFieldRefInput<$PrismaModel>
    in?: $Enums.Instutation_type[]
    notIn?: $Enums.Instutation_type[]
    not?: NestedEnumInstutation_typeWithAggregatesFilter<$PrismaModel> | $Enums.Instutation_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstutation_typeFilter<$PrismaModel>
    _max?: NestedEnumInstutation_typeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumReligionFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | EnumReligionFieldRefInput<$PrismaModel>
    in?: $Enums.Religion[]
    notIn?: $Enums.Religion[]
    not?: NestedEnumReligionFilter<$PrismaModel> | $Enums.Religion
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumIn_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.In_Role | EnumIn_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.In_Role[]
    notIn?: $Enums.In_Role[]
    not?: NestedEnumIn_RoleFilter<$PrismaModel> | $Enums.In_Role
  }

  export type NestedEnumReligionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | EnumReligionFieldRefInput<$PrismaModel>
    in?: $Enums.Religion[]
    notIn?: $Enums.Religion[]
    not?: NestedEnumReligionWithAggregatesFilter<$PrismaModel> | $Enums.Religion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReligionFilter<$PrismaModel>
    _max?: NestedEnumReligionFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumIn_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.In_Role | EnumIn_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.In_Role[]
    notIn?: $Enums.In_Role[]
    not?: NestedEnumIn_RoleWithAggregatesFilter<$PrismaModel> | $Enums.In_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIn_RoleFilter<$PrismaModel>
    _max?: NestedEnumIn_RoleFilter<$PrismaModel>
  }

  export type NestedEnumStuden_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Studen_Status | EnumStuden_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Studen_Status[]
    notIn?: $Enums.Studen_Status[]
    not?: NestedEnumStuden_StatusFilter<$PrismaModel> | $Enums.Studen_Status
  }

  export type NestedEnumStuden_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Studen_Status | EnumStuden_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Studen_Status[]
    notIn?: $Enums.Studen_Status[]
    not?: NestedEnumStuden_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Studen_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStuden_StatusFilter<$PrismaModel>
    _max?: NestedEnumStuden_StatusFilter<$PrismaModel>
  }

  export type TeachersCreateWithoutInstutaionInput = {
    id?: string
    name_eng: string
    name_bng: string
    teacher_id: string
    teacher_enitial: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    position?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
  }

  export type TeachersUncheckedCreateWithoutInstutaionInput = {
    id?: string
    name_eng: string
    name_bng: string
    teacher_id: string
    teacher_enitial: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    position?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
  }

  export type TeachersCreateOrConnectWithoutInstutaionInput = {
    where: TeachersWhereUniqueInput
    create: XOR<TeachersCreateWithoutInstutaionInput, TeachersUncheckedCreateWithoutInstutaionInput>
  }

  export type TeachersCreateManyInstutaionInputEnvelope = {
    data: TeachersCreateManyInstutaionInput | TeachersCreateManyInstutaionInput[]
    skipDuplicates?: boolean
  }

  export type StudentsCreateWithoutInstutaionInput = {
    id?: string
    class_role: string
    name_eng: string
    name_bng: string
    student_id: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
    status?: $Enums.Studen_Status
  }

  export type StudentsUncheckedCreateWithoutInstutaionInput = {
    id?: string
    class_role: string
    name_eng: string
    name_bng: string
    student_id: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
    status?: $Enums.Studen_Status
  }

  export type StudentsCreateOrConnectWithoutInstutaionInput = {
    where: StudentsWhereUniqueInput
    create: XOR<StudentsCreateWithoutInstutaionInput, StudentsUncheckedCreateWithoutInstutaionInput>
  }

  export type StudentsCreateManyInstutaionInputEnvelope = {
    data: StudentsCreateManyInstutaionInput | StudentsCreateManyInstutaionInput[]
    skipDuplicates?: boolean
  }

  export type TeachersUpsertWithWhereUniqueWithoutInstutaionInput = {
    where: TeachersWhereUniqueInput
    update: XOR<TeachersUpdateWithoutInstutaionInput, TeachersUncheckedUpdateWithoutInstutaionInput>
    create: XOR<TeachersCreateWithoutInstutaionInput, TeachersUncheckedCreateWithoutInstutaionInput>
  }

  export type TeachersUpdateWithWhereUniqueWithoutInstutaionInput = {
    where: TeachersWhereUniqueInput
    data: XOR<TeachersUpdateWithoutInstutaionInput, TeachersUncheckedUpdateWithoutInstutaionInput>
  }

  export type TeachersUpdateManyWithWhereWithoutInstutaionInput = {
    where: TeachersScalarWhereInput
    data: XOR<TeachersUpdateManyMutationInput, TeachersUncheckedUpdateManyWithoutInstutaionInput>
  }

  export type TeachersScalarWhereInput = {
    AND?: TeachersScalarWhereInput | TeachersScalarWhereInput[]
    OR?: TeachersScalarWhereInput[]
    NOT?: TeachersScalarWhereInput | TeachersScalarWhereInput[]
    id?: StringFilter<"Teachers"> | string
    instutaion_id?: StringFilter<"Teachers"> | string
    name_eng?: StringFilter<"Teachers"> | string
    name_bng?: StringFilter<"Teachers"> | string
    teacher_id?: StringFilter<"Teachers"> | string
    teacher_enitial?: StringFilter<"Teachers"> | string
    image?: StringFilter<"Teachers"> | string
    email?: StringFilter<"Teachers"> | string
    phone_number?: StringFilter<"Teachers"> | string
    password?: StringFilter<"Teachers"> | string
    religion?: EnumReligionFilter<"Teachers"> | $Enums.Religion
    gender?: EnumGenderFilter<"Teachers"> | $Enums.Gender
    date_of_birth?: DateTimeFilter<"Teachers"> | Date | string
    address?: StringNullableFilter<"Teachers"> | string | null
    signeture?: StringNullableFilter<"Teachers"> | string | null
    position?: StringNullableFilter<"Teachers"> | string | null
    blod_group?: StringNullableFilter<"Teachers"> | string | null
    role?: EnumIn_RoleFilter<"Teachers"> | $Enums.In_Role
  }

  export type StudentsUpsertWithWhereUniqueWithoutInstutaionInput = {
    where: StudentsWhereUniqueInput
    update: XOR<StudentsUpdateWithoutInstutaionInput, StudentsUncheckedUpdateWithoutInstutaionInput>
    create: XOR<StudentsCreateWithoutInstutaionInput, StudentsUncheckedCreateWithoutInstutaionInput>
  }

  export type StudentsUpdateWithWhereUniqueWithoutInstutaionInput = {
    where: StudentsWhereUniqueInput
    data: XOR<StudentsUpdateWithoutInstutaionInput, StudentsUncheckedUpdateWithoutInstutaionInput>
  }

  export type StudentsUpdateManyWithWhereWithoutInstutaionInput = {
    where: StudentsScalarWhereInput
    data: XOR<StudentsUpdateManyMutationInput, StudentsUncheckedUpdateManyWithoutInstutaionInput>
  }

  export type StudentsScalarWhereInput = {
    AND?: StudentsScalarWhereInput | StudentsScalarWhereInput[]
    OR?: StudentsScalarWhereInput[]
    NOT?: StudentsScalarWhereInput | StudentsScalarWhereInput[]
    id?: StringFilter<"Students"> | string
    instutaion_id?: StringFilter<"Students"> | string
    class_role?: StringFilter<"Students"> | string
    name_eng?: StringFilter<"Students"> | string
    name_bng?: StringFilter<"Students"> | string
    student_id?: StringFilter<"Students"> | string
    image?: StringFilter<"Students"> | string
    email?: StringFilter<"Students"> | string
    phone_number?: StringFilter<"Students"> | string
    password?: StringFilter<"Students"> | string
    religion?: EnumReligionFilter<"Students"> | $Enums.Religion
    gender?: EnumGenderFilter<"Students"> | $Enums.Gender
    date_of_birth?: DateTimeFilter<"Students"> | Date | string
    address?: StringNullableFilter<"Students"> | string | null
    signeture?: StringNullableFilter<"Students"> | string | null
    blod_group?: StringNullableFilter<"Students"> | string | null
    role?: EnumIn_RoleFilter<"Students"> | $Enums.In_Role
    status?: EnumStuden_StatusFilter<"Students"> | $Enums.Studen_Status
  }

  export type InistutationsCreateWithoutTeachersInput = {
    eiin?: string
    name_eng: string
    name_bng: string
    founding_date?: Date | string | null
    address?: string | null
    phone_number: string
    email: string
    proof_of_document?: string | null
    logo?: string | null
    type?: $Enums.Instutation_type
    isVarified?: boolean
    password: string
    students?: StudentsCreateNestedManyWithoutInstutaionInput
  }

  export type InistutationsUncheckedCreateWithoutTeachersInput = {
    eiin?: string
    name_eng: string
    name_bng: string
    founding_date?: Date | string | null
    address?: string | null
    phone_number: string
    email: string
    proof_of_document?: string | null
    logo?: string | null
    type?: $Enums.Instutation_type
    isVarified?: boolean
    password: string
    students?: StudentsUncheckedCreateNestedManyWithoutInstutaionInput
  }

  export type InistutationsCreateOrConnectWithoutTeachersInput = {
    where: InistutationsWhereUniqueInput
    create: XOR<InistutationsCreateWithoutTeachersInput, InistutationsUncheckedCreateWithoutTeachersInput>
  }

  export type InistutationsUpsertWithoutTeachersInput = {
    update: XOR<InistutationsUpdateWithoutTeachersInput, InistutationsUncheckedUpdateWithoutTeachersInput>
    create: XOR<InistutationsCreateWithoutTeachersInput, InistutationsUncheckedCreateWithoutTeachersInput>
    where?: InistutationsWhereInput
  }

  export type InistutationsUpdateToOneWithWhereWithoutTeachersInput = {
    where?: InistutationsWhereInput
    data: XOR<InistutationsUpdateWithoutTeachersInput, InistutationsUncheckedUpdateWithoutTeachersInput>
  }

  export type InistutationsUpdateWithoutTeachersInput = {
    eiin?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    founding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    proof_of_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInstutation_typeFieldUpdateOperationsInput | $Enums.Instutation_type
    isVarified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    students?: StudentsUpdateManyWithoutInstutaionNestedInput
  }

  export type InistutationsUncheckedUpdateWithoutTeachersInput = {
    eiin?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    founding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    proof_of_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInstutation_typeFieldUpdateOperationsInput | $Enums.Instutation_type
    isVarified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    students?: StudentsUncheckedUpdateManyWithoutInstutaionNestedInput
  }

  export type InistutationsCreateWithoutStudentsInput = {
    eiin?: string
    name_eng: string
    name_bng: string
    founding_date?: Date | string | null
    address?: string | null
    phone_number: string
    email: string
    proof_of_document?: string | null
    logo?: string | null
    type?: $Enums.Instutation_type
    isVarified?: boolean
    password: string
    teachers?: TeachersCreateNestedManyWithoutInstutaionInput
  }

  export type InistutationsUncheckedCreateWithoutStudentsInput = {
    eiin?: string
    name_eng: string
    name_bng: string
    founding_date?: Date | string | null
    address?: string | null
    phone_number: string
    email: string
    proof_of_document?: string | null
    logo?: string | null
    type?: $Enums.Instutation_type
    isVarified?: boolean
    password: string
    teachers?: TeachersUncheckedCreateNestedManyWithoutInstutaionInput
  }

  export type InistutationsCreateOrConnectWithoutStudentsInput = {
    where: InistutationsWhereUniqueInput
    create: XOR<InistutationsCreateWithoutStudentsInput, InistutationsUncheckedCreateWithoutStudentsInput>
  }

  export type InistutationsUpsertWithoutStudentsInput = {
    update: XOR<InistutationsUpdateWithoutStudentsInput, InistutationsUncheckedUpdateWithoutStudentsInput>
    create: XOR<InistutationsCreateWithoutStudentsInput, InistutationsUncheckedCreateWithoutStudentsInput>
    where?: InistutationsWhereInput
  }

  export type InistutationsUpdateToOneWithWhereWithoutStudentsInput = {
    where?: InistutationsWhereInput
    data: XOR<InistutationsUpdateWithoutStudentsInput, InistutationsUncheckedUpdateWithoutStudentsInput>
  }

  export type InistutationsUpdateWithoutStudentsInput = {
    eiin?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    founding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    proof_of_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInstutation_typeFieldUpdateOperationsInput | $Enums.Instutation_type
    isVarified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    teachers?: TeachersUpdateManyWithoutInstutaionNestedInput
  }

  export type InistutationsUncheckedUpdateWithoutStudentsInput = {
    eiin?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    founding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    proof_of_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumInstutation_typeFieldUpdateOperationsInput | $Enums.Instutation_type
    isVarified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    teachers?: TeachersUncheckedUpdateManyWithoutInstutaionNestedInput
  }

  export type TeachersCreateManyInstutaionInput = {
    id?: string
    name_eng: string
    name_bng: string
    teacher_id: string
    teacher_enitial: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    position?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
  }

  export type StudentsCreateManyInstutaionInput = {
    id?: string
    class_role: string
    name_eng: string
    name_bng: string
    student_id: string
    image: string
    email: string
    phone_number: string
    password: string
    religion?: $Enums.Religion
    gender?: $Enums.Gender
    date_of_birth: Date | string
    address?: string | null
    signeture?: string | null
    blod_group?: string | null
    role?: $Enums.In_Role
    status?: $Enums.Studen_Status
  }

  export type TeachersUpdateWithoutInstutaionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_enitial?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
  }

  export type TeachersUncheckedUpdateWithoutInstutaionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_enitial?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
  }

  export type TeachersUncheckedUpdateManyWithoutInstutaionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    teacher_id?: StringFieldUpdateOperationsInput | string
    teacher_enitial?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
  }

  export type StudentsUpdateWithoutInstutaionInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_role?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
    status?: EnumStuden_StatusFieldUpdateOperationsInput | $Enums.Studen_Status
  }

  export type StudentsUncheckedUpdateWithoutInstutaionInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_role?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
    status?: EnumStuden_StatusFieldUpdateOperationsInput | $Enums.Studen_Status
  }

  export type StudentsUncheckedUpdateManyWithoutInstutaionInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_role?: StringFieldUpdateOperationsInput | string
    name_eng?: StringFieldUpdateOperationsInput | string
    name_bng?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    signeture?: NullableStringFieldUpdateOperationsInput | string | null
    blod_group?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumIn_RoleFieldUpdateOperationsInput | $Enums.In_Role
    status?: EnumStuden_StatusFieldUpdateOperationsInput | $Enums.Studen_Status
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}