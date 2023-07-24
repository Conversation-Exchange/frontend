/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Activation {
  uid: string;
  token: string;
}

/** Сериализатор для создания чата. */
export interface Chat {
  /** @pattern ^[-a-zA-Z0-9_]+$ */
  companion: string;
}

/** Сериализатор для списка чатов. */
export interface ChatList {
  id: number;
  companion: string;
}

/**
 * * `Мужской` - Мужской
 * * `Женский` - Женский
 */
export enum GenderEnum {
  man = 'Мужской',
  women = 'Женский',
}

export type NullEnum = null;

export interface PaginatedChatListList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: ChatList[];
}

export interface PaginatedUserList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: User[];
}

export interface PasswordResetConfirm {
  uid: string;
  token: string;
  new_password: string;
}

/** Сериализатор для модели пользователя. */
export interface PatchedUser {
  /**
   * Электронная почта
   * Адрес email
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username?: string;
  /** @maxLength 128 */
  password?: string;
  /** @maxLength 150 */
  first_name?: string;
  /** @format uri */
  avatar?: string | null;
  age?: string;
  /**
   * Слаг
   * Слаг
   * @maxLength 150
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug?: string | null;
  /**
   * Страна
   * Страна проживания пользователя
   * @maxLength 50
   */
  country?: string;
  city?: string;
  /**
   * Дата рождения
   * Дата рождения пользователя
   * @format date
   */
  birth_date?: string | null;
  native_languages?: UserNativeLanguage[];
  foreign_languages?: UserForeignLanguage[];
  /**
   * Пол
   * Пол пользователя
   *
   * * `Мужской` - Мужской
   * * `Женский` - Женский
   */
  gender?: GenderEnum | NullEnum | null;
  /**
   * Темы для разговора
   * Темы для разговора
   * @maxLength 100
   */
  topics_for_discussion?: string;
  /**
   * О себе
   * О себе
   * @maxLength 100
   */
  about?: string;
}

export interface SendEmailReset {
  /** @format email */
  email: string;
}

export interface SetPassword {
  new_password: string;
  current_password: string;
}

export interface SetUsername {
  current_password: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  new_username: string;
}

/**
 * * `Начинающий` - Начинающий
 * * `Средний` - Средний
 * * `Продвинутый` - Продвинутый
 */
export enum SkillLevelEnum {
  beginner = 'Начинающий',
  middle = 'Средний',
  advanced = 'Продвинутый',
}

export interface TokenObtainPair {
  username: string;
  password: string;
  access: string;
  refresh: string;
}

export interface TokenRefresh {
  access: string;
  refresh: string;
}

export interface TokenVerify {
  token: string;
}

/** Сериализатор для модели пользователя. */
export interface User {
  /**
   * Электронная почта
   * Адрес email
   * @format email
   * @maxLength 254
   */
  email: string;
  /**
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /** @maxLength 128 */
  password: string;
  /** @maxLength 150 */
  first_name?: string;
  /** @format uri */
  avatar?: string | null;
  age: string;
  /**
   * Слаг
   * Слаг
   * @maxLength 150
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug?: string | null;
  /**
   * Страна
   * Страна проживания пользователя
   * @maxLength 50
   */
  country?: string;
  city?: string;
  /**
   * Дата рождения
   * Дата рождения пользователя
   * @format date
   */
  birth_date?: string | null;
  native_languages: UserNativeLanguage[];
  foreign_languages: UserForeignLanguage[];
  /**
   * Пол
   * Пол пользователя
   *
   * * `Мужской` - Мужской
   * * `Женский` - Женский
   */
  gender?: GenderEnum | NullEnum | null;
  /**
   * Темы для разговора
   * Темы для разговора
   * @maxLength 100
   */
  topics_for_discussion?: string;
  /**
   * О себе
   * О себе
   * @maxLength 100
   */
  about?: string;
}

export interface UserCreate {
  /**
   * Электронная почта
   * Адрес email
   * @format email
   * @maxLength 254
   */
  email: string;
  /**
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  id: number;
  password: string;
}

/** Сериализатор для промежутоной модели Пользователь-иностранный язык. */
export interface UserForeignLanguage {
  id: number;
  /**
   * Название
   * Наименование
   */
  language: string;
  /**
   * Уровень владения языком
   * Укажите уровень вашего владения языком.
   *
   * * `Начинающий` - Начинающий
   * * `Средний` - Средний
   * * `Продвинутый` - Продвинутый
   */
  skill_level: SkillLevelEnum;
}

/** Сериализатор для промежутоной модели Пользователь-родной язык. */
export interface UserNativeLanguage {
  id: number;
  /**
   * Название
   * Наименование
   */
  language: string;
}

export interface UsernameResetConfirm {
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  new_username: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Lang_Exchange API
 * @version 1.0.0
 *
 * API-endpoints for "Lang_Exchange" project
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     *
     * @tags auth
     * @name AuthJwtCreateCreate
     * @request POST:/api/v1/auth/jwt/create/
     */
    authJwtCreateCreate: (data: TokenObtainPair, params: RequestParams = {}) =>
      this.request<TokenObtainPair, any>({
        path: `/api/v1/auth/jwt/create/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
     *
     * @tags auth
     * @name AuthJwtRefreshCreate
     * @request POST:/api/v1/auth/jwt/refresh/
     */
    authJwtRefreshCreate: (data: TokenRefresh, params: RequestParams = {}) =>
      this.request<TokenRefresh, any>({
        path: `/api/v1/auth/jwt/refresh/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Takes a token and indicates if it is valid.  This view provides no information about a token's fitness for a particular use.
     *
     * @tags auth
     * @name AuthJwtVerifyCreate
     * @request POST:/api/v1/auth/jwt/verify/
     */
    authJwtVerifyCreate: (data: TokenVerify, params: RequestParams = {}) =>
      this.request<TokenVerify, any>({
        path: `/api/v1/auth/jwt/verify/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Просмотреть свои чаты
     *
     * @tags chats
     * @name ChatsList
     * @request GET:/api/v1/chats/
     * @secure
     */
    chatsList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** Which field to use when ordering the results. */
        ordering?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** A search term. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedChatListList, any>({
        path: `/api/v1/chats/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Начать чат
     *
     * @tags chats
     * @name ChatsCreate
     * @request POST:/api/v1/chats/
     * @secure
     */
    chatsCreate: (data: Chat, params: RequestParams = {}) =>
      this.request<Chat, any>({
        path: `/api/v1/chats/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Просмотреть чат
     *
     * @tags chats
     * @name ChatsRetrieve
     * @request GET:/api/v1/chats/{id}/
     * @secure
     */
    chatsRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<Chat, any>({
        path: `/api/v1/chats/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Очистить сообщения чата
     *
     * @tags chats
     * @name ChatsClearCreate
     * @request POST:/api/v1/chats/{id}/clear/
     * @secure
     */
    chatsClearCreate: (id: string, data: Chat, params: RequestParams = {}) =>
      this.request<Chat, any>({
        path: `/api/v1/chats/${id}/clear/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Отправить сообщение в чат
     *
     * @tags chats
     * @name ChatsSendMessageCreate
     * @request POST:/api/v1/chats/{id}/send_message/
     * @secure
     */
    chatsSendMessageCreate: (id: string, data: Chat, params: RequestParams = {}) =>
      this.request<Chat, any>({
        path: `/api/v1/chats/${id}/send_message/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersList
     * @request GET:/api/v1/users/
     * @secure
     */
    usersList: (
      query?: {
        age?: number;
        country?: string;
        /**
         * Название
         * Наименование
         */
        foreign_languages?: string;
        /**
         * Пол
         * Пол пользователя
         *
         * * `Мужской` - Мужской
         * * `Женский` - Женский
         */
        gender?: 'Женский' | 'Мужской' | null;
        /** Number of results to return per page. */
        limit?: number;
        /** A page number within the paginated result set. */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedUserList, any>({
        path: `/api/v1/users/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersCreate
     * @request POST:/api/v1/users/
     * @secure
     */
    usersCreate: (data: UserCreate, params: RequestParams = {}) =>
      this.request<UserCreate, any>({
        path: `/api/v1/users/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersRetrieve
     * @request GET:/api/v1/users/{id}/
     * @secure
     */
    usersRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/v1/users/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersUpdate
     * @request PUT:/api/v1/users/{id}/
     * @secure
     */
    usersUpdate: (id: number, data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/v1/users/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersPartialUpdate
     * @request PATCH:/api/v1/users/{id}/
     * @secure
     */
    usersPartialUpdate: (id: number, data: PatchedUser, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/v1/users/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersDestroy
     * @request DELETE:/api/v1/users/{id}/
     * @secure
     */
    usersDestroy: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/users/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersActivationCreate
     * @request POST:/api/v1/users/activation/
     * @secure
     */
    usersActivationCreate: (data: Activation, params: RequestParams = {}) =>
      this.request<Activation, any>({
        path: `/api/v1/users/activation/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Метод для отображения/скрытия возраста.
     *
     * @tags Users
     * @name UsersHideShowAgePartialUpdate
     * @request PATCH:/api/v1/users/hide_show_age/
     * @secure
     */
    usersHideShowAgePartialUpdate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/users/hide_show_age/`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Метод для отображения/скрытия пола.
     *
     * @tags Users
     * @name UsersHideShowGenderPartialUpdate
     * @request PATCH:/api/v1/users/hide_show_gender/
     * @secure
     */
    usersHideShowGenderPartialUpdate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/users/hide_show_gender/`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersMeRetrieve
     * @request GET:/api/v1/users/me/
     * @secure
     */
    usersMeRetrieve: (params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/v1/users/me/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersMeUpdate
     * @request PUT:/api/v1/users/me/
     * @secure
     */
    usersMeUpdate: (data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/v1/users/me/`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersMePartialUpdate
     * @request PATCH:/api/v1/users/me/
     * @secure
     */
    usersMePartialUpdate: (data: PatchedUser, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/v1/users/me/`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersMeDestroy
     * @request DELETE:/api/v1/users/me/
     * @secure
     */
    usersMeDestroy: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/users/me/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersResendActivationCreate
     * @request POST:/api/v1/users/resend_activation/
     * @secure
     */
    usersResendActivationCreate: (data: SendEmailReset, params: RequestParams = {}) =>
      this.request<SendEmailReset, any>({
        path: `/api/v1/users/resend_activation/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersResetPasswordCreate
     * @request POST:/api/v1/users/reset_password/
     * @secure
     */
    usersResetPasswordCreate: (data: SendEmailReset, params: RequestParams = {}) =>
      this.request<SendEmailReset, any>({
        path: `/api/v1/users/reset_password/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersResetPasswordConfirmCreate
     * @request POST:/api/v1/users/reset_password_confirm/
     * @secure
     */
    usersResetPasswordConfirmCreate: (data: PasswordResetConfirm, params: RequestParams = {}) =>
      this.request<PasswordResetConfirm, any>({
        path: `/api/v1/users/reset_password_confirm/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersResetUsernameCreate
     * @request POST:/api/v1/users/reset_username/
     * @secure
     */
    usersResetUsernameCreate: (data: SendEmailReset, params: RequestParams = {}) =>
      this.request<SendEmailReset, any>({
        path: `/api/v1/users/reset_username/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersResetUsernameConfirmCreate
     * @request POST:/api/v1/users/reset_username_confirm/
     * @secure
     */
    usersResetUsernameConfirmCreate: (data: UsernameResetConfirm, params: RequestParams = {}) =>
      this.request<UsernameResetConfirm, any>({
        path: `/api/v1/users/reset_username_confirm/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersSetPasswordCreate
     * @request POST:/api/v1/users/set_password/
     * @secure
     */
    usersSetPasswordCreate: (data: SetPassword, params: RequestParams = {}) =>
      this.request<SetPassword, any>({
        path: `/api/v1/users/set_password/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет модели пользователя.
     *
     * @tags Users
     * @name UsersSetUsernameCreate
     * @request POST:/api/v1/users/set_username/
     * @secure
     */
    usersSetUsernameCreate: (data: SetUsername, params: RequestParams = {}) =>
      this.request<SetUsername, any>({
        path: `/api/v1/users/set_username/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
