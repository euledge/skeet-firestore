<a href="https://skeet.dev">
  <img src="https://user-images.githubusercontent.com/20677823/221215449-93a7b5a8-5f33-4da8-9dd4-d0713db0a280.png" alt="Skeet Framework Logo">
</a>
<p align="center">
  <a href="https://twitter.com/intent/follow?screen_name=SkeetDev">
    <img src="https://img.shields.io/twitter/follow/ELSOUL_LABO2.svg?label=Follow%20@ELSOUL_LABO2" alt="Follow @ELSOUL_LABO2" />
  </a>
  <br/>

  <a aria-label="npm version" href="https://www.npmjs.com/package/@skeet-framework/firestore">
    <img alt="" src="https://badgen.net/npm/v/@skeet-framework/firestore">
  </a>
  <a aria-label="Downloads Number" href="https://www.npmjs.com/package/@skeet-framework/firestore">
    <img alt="" src="https://badgen.net/npm/dt/@skeet-framework/firestore">
  </a>
  <a aria-label="License" href="https://github.com/elsoul/skeet-firestore/blob/master/LICENSE.txt">
    <img alt="" src="https://badgen.net/badge/license/Apache/blue">
  </a>
    <a aria-label="Code of Conduct" href="https://github.com/elsoul/skeet-firestore/blob/master/CODE_OF_CONDUCT.md">
    <img alt="" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg">
  </a>
</p>

# Skeet Firestore Docs

- [https://skeet.dev/doc/backend/skeet-firestore/](https://skeet.dev/doc/backend/skeet-firestore/)

# Skeet Framework Plugin - Firestore

Skeet Firestore Plugin for CRUD Firestore operation with Typesaurus.

## Features

There are 5 actions in the Skeet Firestore plugin.

| Function Name        | Description                          |
| -------------------- | ------------------------------------ |
| addCollectionItem    | Add Collection Item                  |
| getCollectionItem    | Get Collection Item                  |
| queryCollectionItem  | Query Collection Items               |
| updateCollectionItem | Update Collection Item               |
| deleteCollectionItem | Delete Collection Item (coming soon) |

Nested Document and Collection are supported.

- Add/Get/Query/Update/Delete Collection Item
- Add/Get/Query/Update/Delete Child Collection Item
- Add/Get/Query/Update/Delete Grand Child Collection Item
- Add/Get/Query/Update/Delete Great Grand Child Collection Item
- Add/Get/Query/Update/Delete Great Great Grand Child Collection Item

Available functions for Nested Tree.

| Function Name                            | Description                                    |
| ---------------------------------------- | ---------------------------------------------- |
| addChildCollectionItem                   | Add Child Collection Item                      |
| addGrandChildCollectionItem              | Add Grand Child Collection Item                |
| addGrandGrandChildCollectionItem         | Add Grand Grand Child Collection Item          |
| addGreatGrandGrandChildCollectionItem    | Add Great Grand Grand Child Collection Item    |
| getChildCollectionItem                   | Get Child Collection Item                      |
| getGrandChildCollectionItem              | Get Grand Child Collection Item                |
| getGrandGrandChildCollectionItem         | Get Grand Grand Child Collection Item          |
| getGreatGrandGrandChildCollectionItem    | Get Great Grand Grand Child Collection Item    |
| queryChildCollectionItem                 | Query Child Collection Items                   |
| queryGrandChildCollectionItem            | Query Grand Child Collection Items             |
| queryGrandGrandChildCollectionItem       | Query Grand Grand Child Collection Items       |
| queryGreatGrandGrandChildCollectionItem  | Query Great Grand Grand Child Collection Items |
| updateChildCollectionItem                | Update Child Collection Item                   |
| updateGrandChildCollectionItem           | Update Grand Child Collection Item             |
| updateGrandGrandChildCollectionItem      | Update Grand Grand Child Collection Item       |
| updateGreatGrandGrandChildCollectionItem | Update Great Grand Grand Child Collection Item |

## Install

```bash
$ skeet yarn add -p @skeet-framework/firestore
```

or

```bash
$ yarn add @skeet-framework/firestore
```

## Usage

### Example Model

```typescript
import { Ref } from 'typesaurus'

// CollectionId: auto
// DocumentId: uid
export type User = {
  uid?: string
  username: string
  email?: string
  iconUrl?: string
  createdAt?: string
  updatedAt?: string
}

// CollectionId: auto
// DocumentId: auto
export type UserChatRoom = {
  userRef: Ref<User>
  model: string
  maxTokens: number
  temperature: number
  stream: boolean
  createdAt?: string
  updatedAt?: string
}

// CollectionId: auto
// DocumentId: auto
export type UserChatRoomMessage = {
  userChatRoomRef: Ref<UserChatRoom>
  role: string
  content: string
  createdAt?: string
  updatedAt?: string
}
```

### Create Single Collection/Document

Autogenerate ID String

```typescript
import { addCollectionItem } from '@skeet-framework/firestore'
import { User } from '@/models/userModels.ts'

const run = async () => {
  const parentCollectionName = 'User'
  const params: User = {
    username: 'Satoshi',
  }
  const response = await addCollectionItem<User>(parentCollectionName, params)
  console.log('Ref', response)
}

run()
```

Define Document ID

```typescript
import { addCollectionItem } from '@skeet-framework/firestore'
import { User } from '@/models/userModels.ts'

const run = async () => {
  const parentCollectionName = 'User'
  const params: User = {
    username: 'Satoshi',
  }
  const uid = 'uidstring'
  const response = await addCollectionItem<User>(
    parentCollectionName,
    params,
    uid
  )
  console.log('Ref', response)
}

run()
```

### Create Child Collection/Document

```typescript
import { addChildCollectionItem } from '@skeet-framework/firestore'
import { User, UserChatRoom } from '@/models/userModels.ts'

const run = async () => {
  const parentCollectionName = 'User'
  const params: User = {
    username: 'Satoshi',
  }
  const response = await addCollectionItem<User>(parentCollectionName, params)
  console.log('Ref', response)

  const childCollectionName = 'UserChatRoom'
  const childParams: UserChatRoom = {
    userRef: response.ref,
    model: 'gpt4',
    maxTokens: 100,
    temperature: 0.8,
    stream: false,
  }
  const childResponse = await addChildCollectionItem<UserChatRoom>(
    parentCollectionName,
    response.id,
    childCollectionName,
    childParams
  )
  console.log('Ref', childResponse)
}
```

## Skeet Document

- [https://skeet.dev](https://skeet.dev)

## Skeet TypeScript Serverless Framework

Firestore, Cloud Functions, TypeScript, Jest Test, Google Cloud Load Balancer, Cloud Armor

## What's Skeet?

TypeScript Serverless Framework 'Skeet'.

The Skeet project was launched with the goal of reducing software development, operation, and maintenance costs.

Build Serverless Apps faster.
Powered by TFirestore, Cloud Functions, Typesaurus, Jest, Prettier, and Google Cloud.

## Dependency

- [TypeScript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Google SDK](https://cloud.google.com/sdk/docs)
- [GitHub CLI](https://cli.github.com/)
- [Typesaurus](https://typesaurus.com/)

```bash
$ npm i -g @skeet-framework/cli
$ skeet create web-app
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/elsoul/skeet This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

## Code of Conduct

Everyone interacting in the SKEET project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/elsoul/skeet-cli/blob/master/CODE_OF_CONDUCT.md).
