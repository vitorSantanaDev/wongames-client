/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  JSON: any
  Long: any
  Time: any
  Upload: any
}

export type AdminUser = {
  __typename?: 'AdminUser'
  firstname: Scalars['String']
  id: Scalars['ID']
  lastname: Scalars['String']
  username?: Maybe<Scalars['String']>
}

export type Category = {
  __typename?: 'Category'
  created_at: Scalars['DateTime']
  games?: Maybe<Array<Maybe<Game>>>
  id: Scalars['ID']
  name: Scalars['String']
  published_at?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  updated_at: Scalars['DateTime']
}

export type CategoryGamesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CategoryConnection = {
  __typename?: 'CategoryConnection'
  aggregate?: Maybe<CategoryAggregator>
  groupBy?: Maybe<CategoryGroupBy>
  values?: Maybe<Array<Maybe<Category>>>
}

export type CategoryConnectionCreated_At = {
  __typename?: 'CategoryConnectionCreated_at'
  connection?: Maybe<CategoryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId'
  connection?: Maybe<CategoryConnection>
  key?: Maybe<Scalars['ID']>
}

export type CategoryConnectionName = {
  __typename?: 'CategoryConnectionName'
  connection?: Maybe<CategoryConnection>
  key?: Maybe<Scalars['String']>
}

export type CategoryConnectionPublished_At = {
  __typename?: 'CategoryConnectionPublished_at'
  connection?: Maybe<CategoryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type CategoryConnectionSlug = {
  __typename?: 'CategoryConnectionSlug'
  connection?: Maybe<CategoryConnection>
  key?: Maybe<Scalars['String']>
}

export type CategoryConnectionUpdated_At = {
  __typename?: 'CategoryConnectionUpdated_at'
  connection?: Maybe<CategoryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy'
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>
  published_at?: Maybe<Array<Maybe<CategoryConnectionPublished_At>>>
  slug?: Maybe<Array<Maybe<CategoryConnectionSlug>>>
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>
}

export type CategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name: Scalars['String']
  published_at?: InputMaybe<Scalars['DateTime']>
  slug: Scalars['String']
  updated_by?: InputMaybe<Scalars['ID']>
}

export type Developer = {
  __typename?: 'Developer'
  created_at: Scalars['DateTime']
  games?: Maybe<Array<Maybe<Game>>>
  id: Scalars['ID']
  name: Scalars['String']
  published_at?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  updated_at: Scalars['DateTime']
}

export type DeveloperGamesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type DeveloperAggregator = {
  __typename?: 'DeveloperAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type DeveloperConnection = {
  __typename?: 'DeveloperConnection'
  aggregate?: Maybe<DeveloperAggregator>
  groupBy?: Maybe<DeveloperGroupBy>
  values?: Maybe<Array<Maybe<Developer>>>
}

export type DeveloperConnectionCreated_At = {
  __typename?: 'DeveloperConnectionCreated_at'
  connection?: Maybe<DeveloperConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type DeveloperConnectionId = {
  __typename?: 'DeveloperConnectionId'
  connection?: Maybe<DeveloperConnection>
  key?: Maybe<Scalars['ID']>
}

export type DeveloperConnectionName = {
  __typename?: 'DeveloperConnectionName'
  connection?: Maybe<DeveloperConnection>
  key?: Maybe<Scalars['String']>
}

export type DeveloperConnectionPublished_At = {
  __typename?: 'DeveloperConnectionPublished_at'
  connection?: Maybe<DeveloperConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type DeveloperConnectionSlug = {
  __typename?: 'DeveloperConnectionSlug'
  connection?: Maybe<DeveloperConnection>
  key?: Maybe<Scalars['String']>
}

export type DeveloperConnectionUpdated_At = {
  __typename?: 'DeveloperConnectionUpdated_at'
  connection?: Maybe<DeveloperConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type DeveloperGroupBy = {
  __typename?: 'DeveloperGroupBy'
  created_at?: Maybe<Array<Maybe<DeveloperConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<DeveloperConnectionId>>>
  name?: Maybe<Array<Maybe<DeveloperConnectionName>>>
  published_at?: Maybe<Array<Maybe<DeveloperConnectionPublished_At>>>
  slug?: Maybe<Array<Maybe<DeveloperConnectionSlug>>>
  updated_at?: Maybe<Array<Maybe<DeveloperConnectionUpdated_At>>>
}

export type DeveloperInput = {
  created_by?: InputMaybe<Scalars['ID']>
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name: Scalars['String']
  published_at?: InputMaybe<Scalars['DateTime']>
  slug: Scalars['String']
  updated_by?: InputMaybe<Scalars['ID']>
}

export enum Enum_Game_Rating {
  Br0 = 'BR0',
  Br10 = 'BR10',
  Br12 = 'BR12',
  Br16 = 'BR16',
  Br18 = 'BR18'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  ext?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: InputMaybe<Scalars['Int']>
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: InputMaybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: InputMaybe<Scalars['JSON']>
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  size: Scalars['Float']
  updated_by?: InputMaybe<Scalars['ID']>
  url: Scalars['String']
  width?: InputMaybe<Scalars['Int']>
}

export type Game = {
  __typename?: 'Game'
  categories?: Maybe<Array<Maybe<Category>>>
  cover?: Maybe<UploadFile>
  created_at: Scalars['DateTime']
  description: Scalars['String']
  developers?: Maybe<Array<Maybe<Developer>>>
  gallery?: Maybe<Array<Maybe<UploadFile>>>
  id: Scalars['ID']
  name: Scalars['String']
  platforms?: Maybe<Array<Maybe<Platform>>>
  price: Scalars['Float']
  published_at?: Maybe<Scalars['DateTime']>
  publisher?: Maybe<Publisher>
  rating?: Maybe<Enum_Game_Rating>
  release_date?: Maybe<Scalars['Date']>
  short_description: Scalars['String']
  slug: Scalars['String']
  updated_at: Scalars['DateTime']
}

export type GameCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type GameDevelopersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type GameGalleryArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type GamePlatformsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type GameAggregator = {
  __typename?: 'GameAggregator'
  avg?: Maybe<GameAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<GameAggregatorMax>
  min?: Maybe<GameAggregatorMin>
  sum?: Maybe<GameAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type GameAggregatorAvg = {
  __typename?: 'GameAggregatorAvg'
  price?: Maybe<Scalars['Float']>
}

export type GameAggregatorMax = {
  __typename?: 'GameAggregatorMax'
  price?: Maybe<Scalars['Float']>
}

export type GameAggregatorMin = {
  __typename?: 'GameAggregatorMin'
  price?: Maybe<Scalars['Float']>
}

export type GameAggregatorSum = {
  __typename?: 'GameAggregatorSum'
  price?: Maybe<Scalars['Float']>
}

export type GameConnection = {
  __typename?: 'GameConnection'
  aggregate?: Maybe<GameAggregator>
  groupBy?: Maybe<GameGroupBy>
  values?: Maybe<Array<Maybe<Game>>>
}

export type GameConnectionCover = {
  __typename?: 'GameConnectionCover'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['ID']>
}

export type GameConnectionCreated_At = {
  __typename?: 'GameConnectionCreated_at'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type GameConnectionDescription = {
  __typename?: 'GameConnectionDescription'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['String']>
}

export type GameConnectionId = {
  __typename?: 'GameConnectionId'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['ID']>
}

export type GameConnectionName = {
  __typename?: 'GameConnectionName'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['String']>
}

export type GameConnectionPrice = {
  __typename?: 'GameConnectionPrice'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['Float']>
}

export type GameConnectionPublished_At = {
  __typename?: 'GameConnectionPublished_at'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type GameConnectionPublisher = {
  __typename?: 'GameConnectionPublisher'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['ID']>
}

export type GameConnectionRating = {
  __typename?: 'GameConnectionRating'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['String']>
}

export type GameConnectionRelease_Date = {
  __typename?: 'GameConnectionRelease_date'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['ID']>
}

export type GameConnectionShort_Description = {
  __typename?: 'GameConnectionShort_description'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['String']>
}

export type GameConnectionSlug = {
  __typename?: 'GameConnectionSlug'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['String']>
}

export type GameConnectionUpdated_At = {
  __typename?: 'GameConnectionUpdated_at'
  connection?: Maybe<GameConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type GameGroupBy = {
  __typename?: 'GameGroupBy'
  cover?: Maybe<Array<Maybe<GameConnectionCover>>>
  created_at?: Maybe<Array<Maybe<GameConnectionCreated_At>>>
  description?: Maybe<Array<Maybe<GameConnectionDescription>>>
  id?: Maybe<Array<Maybe<GameConnectionId>>>
  name?: Maybe<Array<Maybe<GameConnectionName>>>
  price?: Maybe<Array<Maybe<GameConnectionPrice>>>
  published_at?: Maybe<Array<Maybe<GameConnectionPublished_At>>>
  publisher?: Maybe<Array<Maybe<GameConnectionPublisher>>>
  rating?: Maybe<Array<Maybe<GameConnectionRating>>>
  release_date?: Maybe<Array<Maybe<GameConnectionRelease_Date>>>
  short_description?: Maybe<Array<Maybe<GameConnectionShort_Description>>>
  slug?: Maybe<Array<Maybe<GameConnectionSlug>>>
  updated_at?: Maybe<Array<Maybe<GameConnectionUpdated_At>>>
}

export type GameInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  cover?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  description: Scalars['String']
  developers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name: Scalars['String']
  platforms?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  price?: InputMaybe<Scalars['Float']>
  published_at?: InputMaybe<Scalars['DateTime']>
  publisher?: InputMaybe<Scalars['ID']>
  rating?: InputMaybe<Enum_Game_Rating>
  release_date?: InputMaybe<Scalars['Date']>
  short_description: Scalars['String']
  slug: Scalars['String']
  updated_by?: InputMaybe<Scalars['ID']>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type InputId = {
  id: Scalars['ID']
}

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type Morph =
  | Category
  | CategoryAggregator
  | CategoryConnection
  | CategoryConnectionCreated_At
  | CategoryConnectionId
  | CategoryConnectionName
  | CategoryConnectionPublished_At
  | CategoryConnectionSlug
  | CategoryConnectionUpdated_At
  | CategoryGroupBy
  | Developer
  | DeveloperAggregator
  | DeveloperConnection
  | DeveloperConnectionCreated_At
  | DeveloperConnectionId
  | DeveloperConnectionName
  | DeveloperConnectionPublished_At
  | DeveloperConnectionSlug
  | DeveloperConnectionUpdated_At
  | DeveloperGroupBy
  | Game
  | GameAggregator
  | GameAggregatorAvg
  | GameAggregatorMax
  | GameAggregatorMin
  | GameAggregatorSum
  | GameConnection
  | GameConnectionCover
  | GameConnectionCreated_At
  | GameConnectionDescription
  | GameConnectionId
  | GameConnectionName
  | GameConnectionPrice
  | GameConnectionPublished_At
  | GameConnectionPublisher
  | GameConnectionRating
  | GameConnectionRelease_Date
  | GameConnectionShort_Description
  | GameConnectionSlug
  | GameConnectionUpdated_At
  | GameGroupBy
  | I18NLocale
  | Platform
  | PlatformAggregator
  | PlatformConnection
  | PlatformConnectionCreated_At
  | PlatformConnectionId
  | PlatformConnectionName
  | PlatformConnectionPublished_At
  | PlatformConnectionSlug
  | PlatformConnectionUpdated_At
  | PlatformGroupBy
  | Publisher
  | PublisherAggregator
  | PublisherConnection
  | PublisherConnectionCreated_At
  | PublisherConnectionId
  | PublisherConnectionName
  | PublisherConnectionPublished_At
  | PublisherConnectionSlug
  | PublisherConnectionUpdated_At
  | PublisherGroupBy
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreated_At
  | UploadFileConnectionExt
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionHeight
  | UploadFileConnectionId
  | UploadFileConnectionMime
  | UploadFileConnectionName
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionSize
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
  | UploadFileGroupBy
  | UserPermissionsPasswordPayload
  | UsersPermissionsLoginPayload
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserGroupBy
  | CreateCategoryPayload
  | CreateDeveloperPayload
  | CreateGamePayload
  | CreatePlatformPayload
  | CreatePublisherPayload
  | CreateRolePayload
  | CreateUserPayload
  | DeleteCategoryPayload
  | DeleteDeveloperPayload
  | DeleteFilePayload
  | DeleteGamePayload
  | DeletePlatformPayload
  | DeletePublisherPayload
  | DeleteRolePayload
  | DeleteUserPayload
  | UpdateCategoryPayload
  | UpdateDeveloperPayload
  | UpdateGamePayload
  | UpdatePlatformPayload
  | UpdatePublisherPayload
  | UpdateRolePayload
  | UpdateUserPayload

export type Mutation = {
  __typename?: 'Mutation'
  createCategory?: Maybe<CreateCategoryPayload>
  createDeveloper?: Maybe<CreateDeveloperPayload>
  createGame?: Maybe<CreateGamePayload>
  createPlatform?: Maybe<CreatePlatformPayload>
  createPublisher?: Maybe<CreatePublisherPayload>
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>
  deleteCategory?: Maybe<DeleteCategoryPayload>
  deleteDeveloper?: Maybe<DeleteDeveloperPayload>
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>
  deleteGame?: Maybe<DeleteGamePayload>
  deletePlatform?: Maybe<DeletePlatformPayload>
  deletePublisher?: Maybe<DeletePublisherPayload>
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFile>>
  register: UsersPermissionsLoginPayload
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateCategory?: Maybe<UpdateCategoryPayload>
  updateDeveloper?: Maybe<UpdateDeveloperPayload>
  updateFileInfo: UploadFile
  updateGame?: Maybe<UpdateGamePayload>
  updatePlatform?: Maybe<UpdatePlatformPayload>
  updatePublisher?: Maybe<UpdatePublisherPayload>
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>
  upload: UploadFile
}

export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CreateCategoryInput>
}

export type MutationCreateDeveloperArgs = {
  input?: InputMaybe<CreateDeveloperInput>
}

export type MutationCreateGameArgs = {
  input?: InputMaybe<CreateGameInput>
}

export type MutationCreatePlatformArgs = {
  input?: InputMaybe<CreatePlatformInput>
}

export type MutationCreatePublisherArgs = {
  input?: InputMaybe<CreatePublisherInput>
}

export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>
}

export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>
}

export type MutationDeleteCategoryArgs = {
  input?: InputMaybe<DeleteCategoryInput>
}

export type MutationDeleteDeveloperArgs = {
  input?: InputMaybe<DeleteDeveloperInput>
}

export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>
}

export type MutationDeleteGameArgs = {
  input?: InputMaybe<DeleteGameInput>
}

export type MutationDeletePlatformArgs = {
  input?: InputMaybe<DeletePlatformInput>
}

export type MutationDeletePublisherArgs = {
  input?: InputMaybe<DeletePublisherInput>
}

export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>
}

export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  files: Array<InputMaybe<Scalars['Upload']>>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
  source?: InputMaybe<Scalars['String']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationUpdateCategoryArgs = {
  input?: InputMaybe<UpdateCategoryInput>
}

export type MutationUpdateDeveloperArgs = {
  input?: InputMaybe<UpdateDeveloperInput>
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info: FileInfoInput
}

export type MutationUpdateGameArgs = {
  input?: InputMaybe<UpdateGameInput>
}

export type MutationUpdatePlatformArgs = {
  input?: InputMaybe<UpdatePlatformInput>
}

export type MutationUpdatePublisherArgs = {
  input?: InputMaybe<UpdatePublisherInput>
}

export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>
}

export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  file: Scalars['Upload']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
  source?: InputMaybe<Scalars['String']>
}

export type Platform = {
  __typename?: 'Platform'
  created_at: Scalars['DateTime']
  games?: Maybe<Array<Maybe<Game>>>
  id: Scalars['ID']
  name: Scalars['String']
  published_at?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type PlatformGamesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type PlatformAggregator = {
  __typename?: 'PlatformAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type PlatformConnection = {
  __typename?: 'PlatformConnection'
  aggregate?: Maybe<PlatformAggregator>
  groupBy?: Maybe<PlatformGroupBy>
  values?: Maybe<Array<Maybe<Platform>>>
}

export type PlatformConnectionCreated_At = {
  __typename?: 'PlatformConnectionCreated_at'
  connection?: Maybe<PlatformConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type PlatformConnectionId = {
  __typename?: 'PlatformConnectionId'
  connection?: Maybe<PlatformConnection>
  key?: Maybe<Scalars['ID']>
}

export type PlatformConnectionName = {
  __typename?: 'PlatformConnectionName'
  connection?: Maybe<PlatformConnection>
  key?: Maybe<Scalars['String']>
}

export type PlatformConnectionPublished_At = {
  __typename?: 'PlatformConnectionPublished_at'
  connection?: Maybe<PlatformConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type PlatformConnectionSlug = {
  __typename?: 'PlatformConnectionSlug'
  connection?: Maybe<PlatformConnection>
  key?: Maybe<Scalars['String']>
}

export type PlatformConnectionUpdated_At = {
  __typename?: 'PlatformConnectionUpdated_at'
  connection?: Maybe<PlatformConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type PlatformGroupBy = {
  __typename?: 'PlatformGroupBy'
  created_at?: Maybe<Array<Maybe<PlatformConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<PlatformConnectionId>>>
  name?: Maybe<Array<Maybe<PlatformConnectionName>>>
  published_at?: Maybe<Array<Maybe<PlatformConnectionPublished_At>>>
  slug?: Maybe<Array<Maybe<PlatformConnectionSlug>>>
  updated_at?: Maybe<Array<Maybe<PlatformConnectionUpdated_At>>>
}

export type PlatformInput = {
  created_by?: InputMaybe<Scalars['ID']>
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name: Scalars['String']
  published_at?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Publisher = {
  __typename?: 'Publisher'
  created_at: Scalars['DateTime']
  games?: Maybe<Array<Maybe<Game>>>
  id: Scalars['ID']
  name: Scalars['String']
  published_at?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  updated_at: Scalars['DateTime']
}

export type PublisherGamesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type PublisherAggregator = {
  __typename?: 'PublisherAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type PublisherConnection = {
  __typename?: 'PublisherConnection'
  aggregate?: Maybe<PublisherAggregator>
  groupBy?: Maybe<PublisherGroupBy>
  values?: Maybe<Array<Maybe<Publisher>>>
}

export type PublisherConnectionCreated_At = {
  __typename?: 'PublisherConnectionCreated_at'
  connection?: Maybe<PublisherConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type PublisherConnectionId = {
  __typename?: 'PublisherConnectionId'
  connection?: Maybe<PublisherConnection>
  key?: Maybe<Scalars['ID']>
}

export type PublisherConnectionName = {
  __typename?: 'PublisherConnectionName'
  connection?: Maybe<PublisherConnection>
  key?: Maybe<Scalars['String']>
}

export type PublisherConnectionPublished_At = {
  __typename?: 'PublisherConnectionPublished_at'
  connection?: Maybe<PublisherConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type PublisherConnectionSlug = {
  __typename?: 'PublisherConnectionSlug'
  connection?: Maybe<PublisherConnection>
  key?: Maybe<Scalars['String']>
}

export type PublisherConnectionUpdated_At = {
  __typename?: 'PublisherConnectionUpdated_at'
  connection?: Maybe<PublisherConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type PublisherGroupBy = {
  __typename?: 'PublisherGroupBy'
  created_at?: Maybe<Array<Maybe<PublisherConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<PublisherConnectionId>>>
  name?: Maybe<Array<Maybe<PublisherConnectionName>>>
  published_at?: Maybe<Array<Maybe<PublisherConnectionPublished_At>>>
  slug?: Maybe<Array<Maybe<PublisherConnectionSlug>>>
  updated_at?: Maybe<Array<Maybe<PublisherConnectionUpdated_At>>>
}

export type PublisherInput = {
  created_by?: InputMaybe<Scalars['ID']>
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name: Scalars['String']
  published_at?: InputMaybe<Scalars['DateTime']>
  slug: Scalars['String']
  updated_by?: InputMaybe<Scalars['ID']>
}

export type Query = {
  __typename?: 'Query'
  categories?: Maybe<Array<Maybe<Category>>>
  categoriesConnection?: Maybe<CategoryConnection>
  category?: Maybe<Category>
  developer?: Maybe<Developer>
  developers?: Maybe<Array<Maybe<Developer>>>
  developersConnection?: Maybe<DeveloperConnection>
  files?: Maybe<Array<Maybe<UploadFile>>>
  filesConnection?: Maybe<UploadFileConnection>
  game?: Maybe<Game>
  games?: Maybe<Array<Maybe<Game>>>
  gamesConnection?: Maybe<GameConnection>
  me?: Maybe<UsersPermissionsMe>
  platform?: Maybe<Platform>
  platforms?: Maybe<Array<Maybe<Platform>>>
  platformsConnection?: Maybe<PlatformConnection>
  publisher?: Maybe<Publisher>
  publishers?: Maybe<Array<Maybe<Publisher>>>
  publishersConnection?: Maybe<PublisherConnection>
  role?: Maybe<UsersPermissionsRole>
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>
  user?: Maybe<UsersPermissionsUser>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  usersConnection?: Maybe<UsersPermissionsUserConnection>
}

export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryCategoryArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryDeveloperArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryDevelopersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryDevelopersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryGameArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryGamesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryGamesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryPlatformArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryPlatformsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryPlatformsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryPublisherArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryPublishersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryPublishersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryRoleArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryUserArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>
  description?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Morph>>>
  size: Scalars['Float']
  updated_at: Scalars['DateTime']
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator'
  avg?: Maybe<UploadFileAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<UploadFileAggregatorMax>
  min?: Maybe<UploadFileAggregatorMin>
  sum?: Maybe<UploadFileAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection'
  aggregate?: Maybe<UploadFileAggregator>
  groupBy?: Maybe<UploadFileGroupBy>
  values?: Maybe<Array<Maybe<UploadFile>>>
}

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['JSON']>
}

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Int']>
}

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['ID']>
}

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['JSON']>
}

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Float']>
}

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Int']>
}

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy'
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>
}

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  created_by?: InputMaybe<Scalars['ID']>
  email: Scalars['String']
  password?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
  username: Scalars['String']
}

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: InputMaybe<Scalars['String']>
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  email: Scalars['String']
  id: Scalars['ID']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']
  controller: Scalars['String']
  enabled: Scalars['Boolean']
  id: Scalars['ID']
  policy?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRole>
  type: Scalars['String']
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>
  type?: Maybe<Scalars['String']>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection'
  aggregate?: Maybe<UsersPermissionsRoleAggregator>
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
}

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy'
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  created_at: Scalars['DateTime']
  email: Scalars['String']
  id: Scalars['ID']
  provider?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRole>
  updated_at: Scalars['DateTime']
  username: Scalars['String']
}

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection'
  aggregate?: Maybe<UsersPermissionsUserAggregator>
  groupBy?: Maybe<UsersPermissionsUserGroupBy>
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy'
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
}

export type CreateCategoryInput = {
  data?: InputMaybe<CategoryInput>
}

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload'
  category?: Maybe<Category>
}

export type CreateDeveloperInput = {
  data?: InputMaybe<DeveloperInput>
}

export type CreateDeveloperPayload = {
  __typename?: 'createDeveloperPayload'
  developer?: Maybe<Developer>
}

export type CreateGameInput = {
  data?: InputMaybe<GameInput>
}

export type CreateGamePayload = {
  __typename?: 'createGamePayload'
  game?: Maybe<Game>
}

export type CreatePlatformInput = {
  data?: InputMaybe<PlatformInput>
}

export type CreatePlatformPayload = {
  __typename?: 'createPlatformPayload'
  platform?: Maybe<Platform>
}

export type CreatePublisherInput = {
  data?: InputMaybe<PublisherInput>
}

export type CreatePublisherPayload = {
  __typename?: 'createPublisherPayload'
  publisher?: Maybe<Publisher>
}

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>
}

export type CreateRolePayload = {
  __typename?: 'createRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type CreateUserInput = {
  data?: InputMaybe<UserInput>
}

export type CreateUserPayload = {
  __typename?: 'createUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type DeleteCategoryInput = {
  where?: InputMaybe<InputId>
}

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload'
  category?: Maybe<Category>
}

export type DeleteDeveloperInput = {
  where?: InputMaybe<InputId>
}

export type DeleteDeveloperPayload = {
  __typename?: 'deleteDeveloperPayload'
  developer?: Maybe<Developer>
}

export type DeleteFileInput = {
  where?: InputMaybe<InputId>
}

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload'
  file?: Maybe<UploadFile>
}

export type DeleteGameInput = {
  where?: InputMaybe<InputId>
}

export type DeleteGamePayload = {
  __typename?: 'deleteGamePayload'
  game?: Maybe<Game>
}

export type DeletePlatformInput = {
  where?: InputMaybe<InputId>
}

export type DeletePlatformPayload = {
  __typename?: 'deletePlatformPayload'
  platform?: Maybe<Platform>
}

export type DeletePublisherInput = {
  where?: InputMaybe<InputId>
}

export type DeletePublisherPayload = {
  __typename?: 'deletePublisherPayload'
  publisher?: Maybe<Publisher>
}

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>
}

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type DeleteUserInput = {
  where?: InputMaybe<InputId>
}

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type EditCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditDeveloperInput = {
  created_by?: InputMaybe<Scalars['ID']>
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  ext?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  size?: InputMaybe<Scalars['Float']>
  updated_by?: InputMaybe<Scalars['ID']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

export type EditGameInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  cover?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  description?: InputMaybe<Scalars['String']>
  developers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  platforms?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  price?: InputMaybe<Scalars['Float']>
  published_at?: InputMaybe<Scalars['DateTime']>
  publisher?: InputMaybe<Scalars['ID']>
  rating?: InputMaybe<Enum_Game_Rating>
  release_date?: InputMaybe<Scalars['Date']>
  short_description?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditPlatformInput = {
  created_by?: InputMaybe<Scalars['ID']>
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditPublisherInput = {
  created_by?: InputMaybe<Scalars['ID']>
  games?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  slug?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  created_by?: InputMaybe<Scalars['ID']>
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
  username?: InputMaybe<Scalars['String']>
}

export type UpdateCategoryInput = {
  data?: InputMaybe<EditCategoryInput>
  where?: InputMaybe<InputId>
}

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload'
  category?: Maybe<Category>
}

export type UpdateDeveloperInput = {
  data?: InputMaybe<EditDeveloperInput>
  where?: InputMaybe<InputId>
}

export type UpdateDeveloperPayload = {
  __typename?: 'updateDeveloperPayload'
  developer?: Maybe<Developer>
}

export type UpdateGameInput = {
  data?: InputMaybe<EditGameInput>
  where?: InputMaybe<InputId>
}

export type UpdateGamePayload = {
  __typename?: 'updateGamePayload'
  game?: Maybe<Game>
}

export type UpdatePlatformInput = {
  data?: InputMaybe<EditPlatformInput>
  where?: InputMaybe<InputId>
}

export type UpdatePlatformPayload = {
  __typename?: 'updatePlatformPayload'
  platform?: Maybe<Platform>
}

export type UpdatePublisherInput = {
  data?: InputMaybe<EditPublisherInput>
  where?: InputMaybe<InputId>
}

export type UpdatePublisherPayload = {
  __typename?: 'updatePublisherPayload'
  publisher?: Maybe<Publisher>
}

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>
  where?: InputMaybe<InputId>
}

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>
  where?: InputMaybe<InputId>
}

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type QueryGamesQueryVariables = Exact<{
  limit: Scalars['Int']
}>

export type QueryGamesQuery = {
  __typename?: 'Query'
  games: Array<{
    __typename?: 'Game'
    id: string
    name: string
    slug: string
    price: number
    cover?: { __typename?: 'UploadFile'; url: string }
    developers: Array<{ __typename?: 'Developer'; name: string }>
  }>
}

export type QueryGameBySlugQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type QueryGameBySlugQuery = {
  __typename?: 'Query'
  games: Array<{
    __typename?: 'Game'
    name: string
    short_description: string
    description: string
    price: number
    rating: Enum_Game_Rating
    release_date?: any
    gallery: Array<{
      __typename?: 'UploadFile'
      src: string
      label?: string
    }>
    cover?: { __typename?: 'UploadFile'; src: string }
    developers: Array<{ __typename?: 'Developer'; name: string }>
    publisher: { __typename?: 'Publisher'; name: string }
    categories: Array<{ __typename?: 'Category'; name: string }>
    platforms: Array<{ __typename?: 'Platform'; name: string }>
  }>
}

export const QueryGamesDocument = gql`
  query QueryGames($limit: Int!) {
    games(limit: $limit) {
      id
      name
      slug
      cover {
        url
      }
      developers {
        name
      }
      price
    }
  }
`

/**
 * __useQueryGamesQuery__
 *
 * To run a query within a React component, call `useQueryGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryGamesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useQueryGamesQuery(
  baseOptions: Apollo.QueryHookOptions<
    QueryGamesQuery,
    QueryGamesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<QueryGamesQuery, QueryGamesQueryVariables>(
    QueryGamesDocument,
    options
  )
}
export function useQueryGamesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QueryGamesQuery,
    QueryGamesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<QueryGamesQuery, QueryGamesQueryVariables>(
    QueryGamesDocument,
    options
  )
}
export type QueryGamesQueryHookResult = ReturnType<typeof useQueryGamesQuery>
export type QueryGamesLazyQueryHookResult = ReturnType<
  typeof useQueryGamesLazyQuery
>
export type QueryGamesQueryResult = Apollo.QueryResult<
  QueryGamesQuery,
  QueryGamesQueryVariables
>
export const QueryGameBySlugDocument = gql`
  query QueryGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      name
      short_description
      description
      price
      rating
      release_date
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        src: url
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`

/**
 * __useQueryGameBySlugQuery__
 *
 * To run a query within a React component, call `useQueryGameBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryGameBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryGameBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useQueryGameBySlugQuery(
  baseOptions: Apollo.QueryHookOptions<
    QueryGameBySlugQuery,
    QueryGameBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<QueryGameBySlugQuery, QueryGameBySlugQueryVariables>(
    QueryGameBySlugDocument,
    options
  )
}
export function useQueryGameBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    QueryGameBySlugQuery,
    QueryGameBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    QueryGameBySlugQuery,
    QueryGameBySlugQueryVariables
  >(QueryGameBySlugDocument, options)
}
export type QueryGameBySlugQueryHookResult = ReturnType<
  typeof useQueryGameBySlugQuery
>
export type QueryGameBySlugLazyQueryHookResult = ReturnType<
  typeof useQueryGameBySlugLazyQuery
>
export type QueryGameBySlugQueryResult = Apollo.QueryResult<
  QueryGameBySlugQuery,
  QueryGameBySlugQueryVariables
>
