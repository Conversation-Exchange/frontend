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

export interface AgeVisibility {
  age_is_hidden: boolean;
}

/** Сериализатор для просмотра чата. */
export interface Chat {
  id: number;
  initiator: UserShort;
  receiver: UserShort;
  messages: Message[];
  blocked_users: string[];
}

/** Сериализатор для просмотра списка чатов. */
export interface ChatList {
  id: number;
  initiator: UserShort;
  receiver: UserShort;
  last_message: string;
  unread: string;
}

/** Сериализатор для просмотра чата. */
export interface ChatRequest {
  blocked_users: string[];
}

/** Сериализатор для создания личного чата. */
export interface ChatStart {
  /**
   * Слаг
   * Слаг
   */
  receiver: string | null;
  /** @maxLength 10000 */
  message: string;
}

/** Сериализатор для создания личного чата. */
export interface ChatStartRequest {
  /**
   * Слаг
   * Слаг
   * @minLength 1
   */
  receiver: string | null;
  /**
   * @minLength 1
   * @maxLength 10000
   */
  message: string;
}

/** Сериализатор модели страны. */
export interface Country {
  /**
   * Код
   * Код страны
   */
  code: string | null;
  /**
   * Название
   * Наименование
   */
  name: string;
  /**
   * Флаг
   * Флаг страны
   * @format uri
   */
  flag_icon: string;
}

/**
 * * `Male` - Мужской
 * * `Female` - Женский
 */
export enum GenderEnum {
  Male = 'Male',
  Female = 'Female',
}

export interface GenderVisibility {
  gender_is_hidden: boolean;
}

export interface Goal {
  /** Название */
  name: string;
  /**
   * Иконка
   * @format uri
   */
  icon: string;
}

/** Сериализатор для создания группового чата. */
export interface GroupChatCreate {
  /**
   * Название
   * @maxLength 128
   */
  name?: string;
  initiator: UserShort;
  members: (string | null)[];
}

/** Сериализатор для создания группового чата. */
export interface GroupChatCreateRequest {
  /**
   * Название
   * @maxLength 128
   */
  name?: string;
  members: (string | null)[];
}

export interface Interest {
  /** Название */
  name: string;
  sorting: string;
}

/** Сериализатор модели языка. */
export interface Language {
  /** Название языка */
  name: string;
  /** Название языка (на этом языке) */
  name_local: string;
  /**
   * ISO 639-1 Код языка
   * 2-символьный код языка без страны
   */
  isocode: string;
  /**
   * Порядок сортировки
   * Увеличьте, чтобы поднять в выборке
   */
  sorting: number;
}

/** Сериализатор модели Message. */
export interface Message {
  id: number;
  /**
   * Слаг
   * Слаг
   */
  sender: string | null;
  /** @maxLength 10000 */
  text: string | null;
  /** @format uri */
  file_to_send?: string;
  /** @format uri */
  photo_to_send?: string;
  /**
   * Ответ на другое сообщение
   * Ответ на другое сообщение
   */
  responding_to?: number | null;
  /**
   * Сообщение отправлено
   * Сообщение отправлено
   */
  sender_keep: boolean;
  is_read: string;
  /**
   * Сообщение закреплено
   * Сообщение закреплено
   */
  is_pinned: boolean;
  read_by: UserShort[];
  /** @format date-time */
  timestamp: string;
}

/** Сериализатор модели Message. */
export interface MessageRequest {
  /**
   * @minLength 1
   * @maxLength 10000
   */
  text: string | null;
  /** @format binary */
  file_to_send?: File;
  /** @format binary */
  photo_to_send?: File;
  /**
   * Ответ на другое сообщение
   * Ответ на другое сообщение
   */
  responding_to?: number | null;
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

export interface PaginatedGoalList {
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
  results?: Goal[];
}

export interface PaginatedInterestList {
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
  results?: Interest[];
}

export interface PaginatedUserReprList {
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
  results?: UserRepr[];
}

/** Сериализатор для заполнения профиля пользователя. */
export interface PatchedUserProfileRequest {
  /**
   * Имя
   * Имя пользователя
   * @maxLength 12
   */
  first_name?: string;
  /** @format binary */
  avatar?: File | null;
  /**
   * Название
   * Наименование
   * @minLength 1
   */
  country?: string;
  languages?: UserLanguageRequest[];
  /**
   * Пол
   * Пол пользователя
   *
   * * `Male` - Мужской
   * * `Female` - Женский
   */
  gender?: GenderEnum | NullEnum | null;
  goals?: string[];
  interests?: string[];
  /**
   * О себе
   * О себе
   * @maxLength 256
   */
  about?: string;
  /**
   * Дата рождения
   * Дата рождения пользователя
   * @format date
   */
  birth_date?: string | null;
}

/**
 * * `pornography` - Порнография
 * * `spam` - Рассылка спама
 * * `fraud` - Мошенничество
 * * `offensive_behavior` - Оскорбительное поведение
 * * `copyright_violation` - Нарушение авторских прав
 */
export enum ReasonEnum {
  Pornography = 'pornography',
  Spam = 'spam',
  Fraud = 'fraud',
  OffensiveBehavior = 'offensive_behavior',
  CopyrightViolation = 'copyright_violation',
}

/** Сериализатор жалоб */
export interface Report {
  /**
   * Причина жалобы
   * Выберите причину данной жалобы.
   *
   * * `pornography` - Порнография
   * * `spam` - Рассылка спама
   * * `fraud` - Мошенничество
   * * `offensive_behavior` - Оскорбительное поведение
   * * `copyright_violation` - Нарушение авторских прав
   */
  reason: ReasonEnum;
  description?: string;
  /** Закрыть пользователю доступ к моей странице */
  close_user_access: boolean;
}

/** Сериализатор жалоб */
export interface ReportRequest {
  /**
   * Причина жалобы
   * Выберите причину данной жалобы.
   *
   * * `pornography` - Порнография
   * * `spam` - Рассылка спама
   * * `fraud` - Мошенничество
   * * `offensive_behavior` - Оскорбительное поведение
   * * `copyright_violation` - Нарушение авторских прав
   */
  reason: ReasonEnum;
  description?: string;
  /** Закрыть пользователю доступ к моей странице */
  close_user_access: boolean;
}

export interface SetPassword {
  new_password: string;
  current_password: string;
}

export interface SetPasswordRequest {
  /** @minLength 1 */
  new_password: string;
  /** @minLength 1 */
  current_password: string;
}

/**
 * * `Newbie` - Новичок
 * * `Amateur` - Любитель
 * * `Profi` - Профи
 * * `Expert` - Эксперт
 * * `Guru` - Гуру
 * * `Native` - Носитель
 */
export enum SkillLevelEnum {
  Newbie = 'Newbie',
  Amateur = 'Amateur',
  Profi = 'Profi',
  Expert = 'Expert',
  Guru = 'Guru',
  Native = 'Native',
}

export interface TokenObtainPair {
  access: string;
  refresh: string;
}

export interface TokenObtainPairRequest {
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  password: string;
}

export interface TokenRefresh {
  access: string;
}

export interface TokenRefreshRequest {
  /** @minLength 1 */
  refresh: string;
}

export interface TokenVerifyRequest {
  /** @minLength 1 */
  token: string;
}

/** Сериализатор создания пользователя. */
export interface UserCreateRequest {
  /**
   * Электронная почта
   * Адрес email
   * @format email
   * @minLength 1
   * @maxLength 30
   */
  email: string;
  /**
   * Логин
   * @minLength 1
   * @maxLength 12
   */
  username: string;
  /** @minLength 1 */
  password: string;
}

/** Сериализатор языков пользователей. */
export interface UserLanguage {
  isocode: string;
  /** Название языка */
  language: string;
  /**
   * Уровень владения языком
   * Укажите уровень вашего владения языком.
   *
   * * `Newbie` - Новичок
   * * `Amateur` - Любитель
   * * `Profi` - Профи
   * * `Expert` - Эксперт
   * * `Guru` - Гуру
   * * `Native` - Носитель
   */
  skill_level: SkillLevelEnum;
}

/** Сериализатор языков пользователей. */
export interface UserLanguageRequest {
  /** @minLength 1 */
  isocode: string;
  /**
   * Уровень владения языком
   * Укажите уровень вашего владения языком.
   *
   * * `Newbie` - Новичок
   * * `Amateur` - Любитель
   * * `Profi` - Профи
   * * `Expert` - Эксперт
   * * `Guru` - Гуру
   * * `Native` - Носитель
   */
  skill_level: SkillLevelEnum;
}

/** Сериализатор для заполнения профиля пользователя. */
export interface UserProfile {
  /** Логин */
  username: string;
  /**
   * Имя
   * Имя пользователя
   * @maxLength 12
   */
  first_name?: string;
  /** @format uri */
  avatar?: string | null;
  age: string;
  /**
   * Слаг
   * Слаг
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug: string | null;
  /**
   * Название
   * Наименование
   */
  country?: string;
  languages?: UserLanguage[];
  /**
   * Пол
   * Пол пользователя
   *
   * * `Male` - Мужской
   * * `Female` - Женский
   */
  gender?: GenderEnum | NullEnum | null;
  goals?: string[];
  interests?: string[];
  /**
   * О себе
   * О себе
   * @maxLength 256
   */
  about?: string;
  /**
   * Последняя активность
   * Последнее время активности пользователя
   * @format date-time
   */
  last_activity: string | null;
  is_online: boolean;
  /** Поле для скрытия/отображения пола пользователя */
  gender_is_hidden: boolean;
  /** Поле для скрытия/отображения возраста пользователя */
  age_is_hidden: boolean;
  role: string;
  is_blocked: boolean;
  /**
   * Дата рождения
   * Дата рождения пользователя
   * @format date
   */
  birth_date?: string | null;
}

/** Сериализатор для просмотра пользователя. */
export interface UserRepr {
  /** Логин */
  username: string;
  /**
   * Имя
   * Имя пользователя
   */
  first_name: string;
  /** @format uri */
  avatar: string;
  age: string;
  /**
   * Слаг
   * Слаг
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug: string | null;
  country: Country;
  languages: UserLanguage[];
  /**
   * Пол
   * Пол пользователя
   *
   * * `Male` - Мужской
   * * `Female` - Женский
   */
  gender: GenderEnum | NullEnum | null;
  goals: Goal[];
  interests: string[];
  /**
   * О себе
   * О себе
   */
  about: string;
  /**
   * Последняя активность
   * Последнее время активности пользователя
   * @format date-time
   */
  last_activity: string | null;
  is_online: boolean;
  /** Поле для скрытия/отображения пола пользователя */
  gender_is_hidden: boolean;
  /** Поле для скрытия/отображения возраста пользователя */
  age_is_hidden: boolean;
  role: string;
  is_blocked: boolean;
}

export interface UserShort {
  /**
   * Слаг
   * Слаг
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug: string | null;
  /** Логин */
  username: string;
  /**
   * Имя
   * Имя пользователя
   */
  first_name: string;
  /**
   * Изображение
   * Аватар пользователя
   * @format uri
   */
  avatar: string | null;
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

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
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
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

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
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`,
    )}`;
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
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key],
    );
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
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
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

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
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

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
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
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
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
 * @title LinguaChat API
 * @version 1.0.0
 *
 * API endpoints for LinguaChat
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     *
     * @tags auth
     * @name AuthJwtCreateCreate
     * @request POST:/api/v1/auth/jwt/create/
     */
    authJwtCreateCreate: (
      data: TokenObtainPairRequest,
      params: RequestParams = {},
    ) =>
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
    authJwtRefreshCreate: (
      data: TokenRefreshRequest,
      params: RequestParams = {},
    ) =>
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
    authJwtVerifyCreate: (
      data: TokenVerifyRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/auth/jwt/verify/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Просмотреть список всех своих личных чатов
     *
     * @tags chats
     * @name ChatsList
     * @summary Просмотреть список чатов
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
     * @description Просмотреть чат и историю сообщений
     *
     * @tags chats
     * @name ChatsRetrieve
     * @summary Просмотреть чат
     * @request GET:/api/v1/chats/{id}/
     * @secure
     */
    chatsRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<Chat, any>({
        path: `/api/v1/chats/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Блокировка пользователя в чате
     *
     * @tags chats
     * @name ChatsBlockUserCreate
     * @request POST:/api/v1/chats/{id}/block_user/
     * @secure
     */
    chatsBlockUserCreate: (
      id: number,
      data: ChatRequest,
      params: RequestParams = {},
    ) =>
      this.request<Chat, any>({
        path: `/api/v1/chats/${id}/block_user/`,
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
     * @summary Отправить сообщение
     * @request POST:/api/v1/chats/{id}/send-message/
     * @secure
     */
    chatsSendMessageCreate: (
      id: number,
      data: MessageRequest,
      params: RequestParams = {},
    ) =>
      this.request<Message, any>({
        path: `/api/v1/chats/${id}/send-message/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Разблокировка пользователя в чате
     *
     * @tags chats
     * @name ChatsUnblockUserCreate
     * @request POST:/api/v1/chats/{id}/unblock_user/
     * @secure
     */
    chatsUnblockUserCreate: (
      id: number,
      data: ChatRequest,
      params: RequestParams = {},
    ) =>
      this.request<Chat, any>({
        path: `/api/v1/chats/${id}/unblock_user/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Создание группового чата.
     *
     * @tags chats
     * @name ChatsStartGroupChatCreate
     * @request POST:/api/v1/chats/start-group-chat/
     * @secure
     */
    chatsStartGroupChatCreate: (
      data: GroupChatCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<GroupChatCreate, any>({
        path: `/api/v1/chats/start-group-chat/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Начать чат с пользователем, отправить первое сообщение
     *
     * @tags chats
     * @name ChatsStartPersonalChatCreate
     * @summary Начать чат с пользователем
     * @request POST:/api/v1/chats/start-personal-chat/
     * @secure
     */
    chatsStartPersonalChatCreate: (
      data: ChatStartRequest,
      params: RequestParams = {},
    ) =>
      this.request<ChatStart, any>({
        path: `/api/v1/chats/start-personal-chat/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Просмотреть все страны с возможностью поиска по их кодам и названиям
     *
     * @tags countries
     * @name CountriesList
     * @summary Просмотреть все страны
     * @request GET:/api/v1/countries/
     * @secure
     */
    countriesList: (
      query?: {
        /** A search term. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Country[], any>({
        path: `/api/v1/countries/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Просмотреть информацию о стране с соответствующим кодом
     *
     * @tags countries
     * @name CountriesRetrieve
     * @summary Просмотреть информацию о стране
     * @request GET:/api/v1/countries/{code}/
     * @secure
     */
    countriesRetrieve: (code: string, params: RequestParams = {}) =>
      this.request<Country, any>({
        path: `/api/v1/countries/${code}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Просмотреть список целей
     *
     * @tags goals
     * @name GoalsList
     * @summary Список целей
     * @request GET:/api/v1/goals/
     * @secure
     */
    goalsList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** A page number within the paginated result set. */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedGoalList, any>({
        path: `/api/v1/goals/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Просмотреть список всех интересов пользователей
     *
     * @tags interests
     * @name InterestsList
     * @summary Список интересов
     * @request GET:/api/v1/interests/
     * @secure
     */
    interestsList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** A page number within the paginated result set. */
        page?: number;
        /** A search term. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedInterestList, any>({
        path: `/api/v1/interests/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Просмотреть все языки с возможностью поиска по их кодам и названиям
     *
     * @tags languages
     * @name LanguagesList
     * @summary Просмотреть все языки
     * @request GET:/api/v1/languages/
     * @secure
     */
    languagesList: (
      query?: {
        /** A search term. */
        search?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Language[], any>({
        path: `/api/v1/languages/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Просмотреть информацию об языке с соответствующим кодом
     *
     * @tags languages
     * @name LanguagesRetrieve
     * @summary Просмотреть информацию об языке
     * @request GET:/api/v1/languages/{isocode}/
     * @secure
     */
    languagesRetrieve: (isocode: string, params: RequestParams = {}) =>
      this.request<Language, any>({
        path: `/api/v1/languages/${isocode}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Просмотреть всех пользователей с применением фильтров и сортировки. Админы и модераторы из выборки исключены
     *
     * @tags users
     * @name UsersList
     * @summary Просмотреть всех пользователей
     * @request GET:/api/v1/users/
     * @secure
     */
    usersList: (
      query?: {
        age?: string;
        /**
         * Название
         * Наименование
         */
        country?: string;
        /**
         * Пол
         * Пол пользователя
         *
         * * `Male` - Мужской
         * * `Female` - Женский
         */
        gender?: 'Female' | 'Male' | null;
        is_online?: boolean;
        /**
         * ISO 639-1 Код языка
         * 2-символьный код языка без страны
         */
        languages?: string;
        /** Number of results to return per page. */
        limit?: number;
        /** Which field to use when ordering the results. */
        ordering?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /**
         * Уровень владения языком
         * Укажите уровень вашего владения языком.
         *
         * * `Newbie` - Новичок
         * * `Amateur` - Любитель
         * * `Profi` - Профи
         * * `Expert` - Эксперт
         * * `Guru` - Гуру
         * * `Native` - Носитель
         */
        skill_level?:
          | 'Amateur'
          | 'Expert'
          | 'Guru'
          | 'Native'
          | 'Newbie'
          | 'Profi';
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedUserReprList, any>({
        path: `/api/v1/users/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Создать нового пользователя
     *
     * @tags users
     * @name UsersCreate
     * @summary Зарегистрироваться
     * @request POST:/api/v1/users/
     * @secure
     */
    usersCreate: (data: UserCreateRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/users/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Просмотреть профиль пользователя с соответствующим slug
     *
     * @tags users
     * @name UsersRetrieve
     * @summary Просмотреть профиль пользователя
     * @request GET:/api/v1/users/{slug}/
     * @secure
     */
    usersRetrieve: (slug: string, params: RequestParams = {}) =>
      this.request<UserRepr, any>({
        path: `/api/v1/users/${slug}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Заблокировать пользователя
     *
     * @tags users
     * @name UsersBlockUserCreate
     * @summary Заблокировать пользователя
     * @request POST:/api/v1/users/{slug}/block_user/
     * @secure
     */
    usersBlockUserCreate: (slug: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/users/${slug}/block_user/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Просмотреть все жалобы на пользователя (для админов и модераторов)
     *
     * @tags users
     * @name UsersReportUserRetrieve
     * @summary Просмотреть все жалобы на пользователя
     * @request GET:/api/v1/users/{slug}/report_user/
     * @secure
     */
    usersReportUserRetrieve: (slug: string, params: RequestParams = {}) =>
      this.request<Report, any>({
        path: `/api/v1/users/${slug}/report_user/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Отправить жалобу на пользователя
     *
     * @tags users
     * @name UsersReportUserCreate
     * @summary Отправить жалобу на пользователя
     * @request POST:/api/v1/users/{slug}/report_user/
     * @secure
     */
    usersReportUserCreate: (
      slug: string,
      data: ReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<Report, any>({
        path: `/api/v1/users/${slug}/report_user/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Разблокировать пользователя
     *
     * @tags users
     * @name UsersUnblockUserCreate
     * @summary Разблокировать пользователя
     * @request POST:/api/v1/users/{slug}/unblock_user/
     * @secure
     */
    usersUnblockUserCreate: (slug: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/users/${slug}/unblock_user/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Изменить видимость возраста в своем профиле
     *
     * @tags users
     * @name UsersHideShowAgePartialUpdate
     * @summary Изменить видимость возраста в своем профиле
     * @request PATCH:/api/v1/users/hide_show_age/
     * @secure
     */
    usersHideShowAgePartialUpdate: (params: RequestParams = {}) =>
      this.request<AgeVisibility, any>({
        path: `/api/v1/users/hide_show_age/`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Изменить видимость пола в своем профиле
     *
     * @tags users
     * @name UsersHideShowGenderPartialUpdate
     * @summary Изменить видимость пола в своем профиле
     * @request PATCH:/api/v1/users/hide_show_gender/
     * @secure
     */
    usersHideShowGenderPartialUpdate: (params: RequestParams = {}) =>
      this.request<GenderVisibility, any>({
        path: `/api/v1/users/hide_show_gender/`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Просмотреть свой профиль
     *
     * @tags users
     * @name UsersMeRetrieve
     * @summary Просмотреть свой профиль
     * @request GET:/api/v1/users/me/
     * @secure
     */
    usersMeRetrieve: (params: RequestParams = {}) =>
      this.request<UserProfile, any>({
        path: `/api/v1/users/me/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Редактировать свой профиль
     *
     * @tags users
     * @name UsersMePartialUpdate
     * @summary Редактировать свой профиль
     * @request PATCH:/api/v1/users/me/
     * @secure
     */
    usersMePartialUpdate: (
      data: PatchedUserProfileRequest,
      params: RequestParams = {},
    ) =>
      this.request<UserProfile, any>({
        path: `/api/v1/users/me/`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Удалить свой аккаунт
     *
     * @tags users
     * @name UsersMeDestroy
     * @summary Удалить свой аккаунт
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
     * @description Изменить пароль на новый
     *
     * @tags users
     * @name UsersSetPasswordCreate
     * @summary Изменить пароль на новый
     * @request POST:/api/v1/users/set_password/
     * @secure
     */
    usersSetPasswordCreate: (
      data: SetPasswordRequest,
      params: RequestParams = {},
    ) =>
      this.request<SetPassword, any>({
        path: `/api/v1/users/set_password/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
