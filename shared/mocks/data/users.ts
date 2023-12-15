/**
 * If you want to be able to log with any of the users below
 * you will need to manually create them within
 * the `onearmy-test-ci` Firebase Project.
 * https://console.firebase.google.com/u/0/project/onearmy-test-ci/authentication/users
 */
export const users = {
  subscriber: {
    _authID: 'a0dFrGVJTlQUA9BqH0QmnQM6flX2',
    _id: 'demo_user',
    _created: '2022-01-30T18:51:57.719Z',
    _modified: '2022-01-30T18:51:57.719Z',
    displayName: 'demo_user',
    userName: 'demo_user',
    userRoles: [],
    coverImages: [
      {
        contentType: 'image/jpeg',
        fullPath: 'uploads/v3_users/demo_user/images/profile-cover-1.jpg',
        name: 'profile-cover-1.jpg',
        size: 18987,
        type: 'image/jpeg',
      },
    ],
    links: [
      {
        label: 'website',
        url: 'http://demo_user.example.com',
      },
    ],
    about: "Hi! I'm a robot 🤖 Beep boop",
    email: 'demo_user@example.com',
    password: 'demo_user',
  },
  'beta-tester': {
    _authID: 'jzusd4xgZTfQBtFBBZzY1UlGAlC3',
    _id: 'demo_beta_tester',
    _created: '2022-01-30T18:51:57.719Z',
    _modified: '2022-01-30T18:51:57.719Z',
    displayName: 'demo_beta_tester',
    userName: 'demo_beta_tester',
    userRoles: ['beta-tester'],
    links: [],
    email: 'demo_beta_tester@example.com',
    password: 'demo_beta_tester',
    notification_settings: {
      emailFrequency: 'daily',
    },
    unsubscribeToken: '123abc',
  },
  admin: {
    _authID: 'RaU8WzbqSIQFdj7iHxiz3fWz0cj1',
    _id: 'demo_admin',
    _created: '2022-01-30T18:51:57.719Z',
    _modified: '2022-01-30T18:51:57.719Z',
    displayName: 'demo_admin',
    userName: 'demo_admin',
    userRoles: ['admin'],
    links: [],
    email: 'demo_admin@example.com',
    password: 'demo_admin',
  },
  notification_howto_author: {
    verified: false,
    _modified: '2022-01-07T12:07:05.988Z',
    _authID: '5UXRly49EOXtIXmKjPfSU5UpeI66',
    _created: '2022-01-09T12:07:05.988Z',
    displayName: 'notification_howto_author',
    _id: 'notification_howto_author',
    _deleted: false,
    userName: 'notification_howto_author',
    moderation: 'awaiting-moderation',
    notifications: [],
  },
  notification_triggerer: {
    verified: false,
    _modified: '2022-01-07T12:07:05.988Z',
    _authID: '5UXRly49EOXtIXmKjPfSU5UpeI55',
    _created: '2022-01-09T12:07:05.988Z',
    displayName: 'notification_triggerer',
    _id: 'notification_triggerer',
    _deleted: false,
    userName: 'notification_triggerer',
    moderation: 'awaiting-moderation',
    notifications: [],
  },
  event_creator: {
    verified: false,
    _modified: '2020-01-07T12:07:05.988Z',
    _authID: '5UXRly49EOXtIXmKjPfSU5UpeI73',
    _created: '2020-01-07T12:07:05.988Z',
    displayName: 'event_creator',
    _id: 'event_creator',
    _deleted: false,
    userName: 'event_creator',
    moderation: 'awaiting-moderation',
  },
  event_editor: {
    _deleted: false,
    userName: 'event_editor',
    verified: false,
    _modified: '2019-12-30T11:39:42.784Z',
    _authID: '8T4FMZ0dOdQbBaHuFYcvc0A3rDt2',
    displayName: 'event_editor',
    _created: '2019-12-30T11:39:42.784Z',
    _id: 'event_editor',
  },
  event_reader: {
    _id: 'event_reader',
    _deleted: false,
    userName: 'event_reader',
    moderation: 'awaiting-moderation',
    verified: false,
    _modified: '2019-08-15T00:00:00.000Z',
    _authID: 'oydwApNvguWQoBOpFVOzQ2yJEOF2',
    _created: '2019-08-15T00:00:00.000Z',
    displayName: 'event_reader',
    userRoles: ['beta-tester'],
  },
  howto_creator: {
    _deleted: false,
    userName: 'howto_creator',
    moderation: 'awaiting-moderation',
    verified: false,
    _modified: '2020-01-07T15:46:00.297Z',
    _authID: 'YhBD7LB22EXsHz40sTSENWUSa9u1',
    _created: '2020-01-07T15:46:00.297Z',
    displayName: 'howto_creator',
    _id: 'howto_creator',
  },
  howto_editor: {
    _id: 'howto_editor',
    _deleted: false,
    userName: 'howto_editor',
    moderation: 'awaiting-moderation',
    verified: false,
    _modified: '2020-01-07T12:12:41.566Z',
    _authID: 'dU5sofScHpV09c8NWA834YCQq0S2',
    displayName: 'howto_editor',
    _created: '2020-01-07T12:12:41.566Z',
  },
  howto_reader: {
    verified: false,
    _modified: '2020-01-07T19:54:49.860Z',
    _authID: 'v888t7UA7RMUvirqvUPT0vvc8en1',
    _created: '2020-01-07T19:54:49.860Z',
    displayName: 'howto_reader',
    _id: 'howto_reader',
    _deleted: false,
    userName: 'howto_reader',
    moderation: 'awaiting-moderation',
  },
  research_creator: {
    _deleted: false,
    userName: 'research_creator',
    moderation: 'awaiting-moderation',
    verified: false,
    _modified: '2020-01-07T15:46:00.297Z',
    _authID: 'FApARSJgB4ak2yZjJlwHyWbOx3I3',
    _created: '2020-01-07T15:46:00.297Z',
    displayName: 'research_creator',
    _id: 'research_creator',
    userRoles: ['research_creator'],
  },
  research_editor: {
    _id: 'research_editor',
    _deleted: false,
    userName: 'research_editor',
    moderation: 'awaiting-moderation',
    verified: false,
    _modified: '2020-01-07T12:12:41.566Z',
    _authID: 'cNksr9jiL8cGvwU88gHFNvfz4SK2',
    displayName: 'research_editor',
    _created: '2020-01-07T12:12:41.566Z',
    userRoles: ['research_editor'],
  },
  research_reader: {
    verified: false,
    _modified: '2020-01-07T19:54:49.860Z',
    _authID: 'QDZSS1YVDaMIDOLQ1a5BkGDerr82',
    _created: '2020-01-07T19:54:49.860Z',
    displayName: 'research_reader',
    _id: 'research_reader',
    _deleted: false,
    userName: 'research_reader',
    moderation: 'awaiting-moderation',
    userRoles: [],
  },
  settings_community_new: {
    _id: 'settings_community_new',
    profileType: null,
    coverImages: [],
    isExpert: null,
    collectedPlasticTypes: null,
    openingHours: [],
    location: null,
    verified: true,
    _modified: '2020-01-07T12:15:08.726Z',
    _created: '2020-01-07T12:15:08.726Z',
    displayName: 'settings_community_new',
    isV4Member: null,
    _deleted: false,
    workspaceType: null,
    country: null,
    userName: 'settings_community_new',
    links: [],
    mapPinDescription: null,
    machineBuilderXp: null,
    _authID: 'vWAbQvq21UbvhGldakIy1x4FpeF2',
    about: null,
  },
  settings_machine_new: {
    collectedPlasticTypes: null,
    location: null,
    openingHours: [],
    verified: true,
    _modified: '2020-01-07T12:14:50.354Z',
    _created: '2020-01-07T12:14:50.354Z',
    displayName: 'settings_machine_new',
    isV4Member: null,
    _deleted: false,
    workspaceType: null,
    country: null,
    userName: 'settings_machine_new',
    links: [],
    mapPinDescription: null,
    machineBuilderXp: [],
    _authID: 'wwtBAo7TrkSQ9nAaBN3D93I1sCM2',
    about: null,
    _id: 'settings_machine_new',
    profileType: null,
    coverImages: [],
    isExpert: null,
    isContactableByPublic: true,
  },
  settings_member_new: {
    isV4Member: null,
    _deleted: false,
    workspaceType: null,
    country: 'Poland',
    userName: 'settings_member_new',
    links: [],
    mapPinDescription: null,
    machineBuilderXp: null,
    _authID: 'pbx4jStD8sNj4OEZTg4AegLTl6E3',
    about: null,
    _id: 'settings_member_new',
    profileType: null,
    coverImages: [],
    isExpert: null,
    collectedPlasticTypes: null,
    openingHours: [],
    location: null,
    verified: true,
    _modified: '2020-01-07T12:14:30.030Z',
    _created: '2020-01-07T12:14:30.030Z',
    displayName: 'settings_member_new',
  },
  settings_plastic_new: {
    collectedPlasticTypes: [],
    openingHours: [],
    location: null,
    verified: true,
    _modified: '2020-01-07T12:15:42.218Z',
    _created: '2020-01-07T12:15:42.218Z',
    displayName: 'settings_plastic_new',
    isV4Member: null,
    _deleted: false,
    workspaceType: null,
    country: null,
    userName: 'settings_plastic_new',
    links: [],
    mapPinDescription: null,
    machineBuilderXp: null,
    _authID: 'uxupeYR7glagQyhBy8q0blr0chd2',
    about: null,
    _id: 'settings_plastic_new',
    profileType: null,
    coverImages: [],
    isExpert: null,
  },
  settings_workplace_new: {
    openingHours: [],
    location: null,
    verified: true,
    _modified: '2020-01-07T12:14:15.081Z',
    _created: '2020-01-07T12:14:15.081Z',
    displayName: 'settings_workplace_new',
    isV4Member: null,
    _deleted: false,
    workspaceType: null,
    country: null,
    userName: 'settings_workplace_new',
    links: [],
    mapPinDescription: null,
    machineBuilderXp: null,
    _authID: 'l9N5HFHzSjQvtP9g9MyFnPpkFmM2',
    about: null,
    _id: 'settings_workplace_new',
    profileType: 'workspace',
    coverImages: [],
    isExpert: null,
    collectedPlasticTypes: null,
    email: 'settings_workplace_new@test.com',
    password: 'test1234',
    userRoles: ['beta-tester'],
    impact: {
      2022: [
        {
          id: 'plastic',
          value: 43000,
          isVisible: true,
        },
        {
          id: 'revenue',
          value: 36000,
          isVisible: true,
        },
        {
          id: 'employees',
          value: 3,
          isVisible: true,
        },
        {
          id: 'volunteers',
          value: 45,
          isVisible: false,
        },
        {
          id: 'machines',
          value: 2,
          isVisible: true,
        },
      ],
    },
  },
  mapview_testing_rejected: {
    openingHours: [],
    location: null,
    verified: true,
    _modified: '2020-01-07T12:14:15.081Z',
    _created: '2020-01-07T12:14:15.081Z',
    displayName: 'mapview_testing_rejected',
    isV4Member: null,
    _deleted: false,
    workspaceType: null,
    country: null,
    userName: 'mapview_testing_rejected',
    links: [],
    mapPinDescription: null,
    machineBuilderXp: null,
    _authID: 'p09Az089n4Uf5IPcZwvhmTEnJ353',
    about: null,
    _id: 'mapview_testing_rejected',
    profileType: 'workspace',
    coverImages: [],
    isExpert: null,
    collectedPlasticTypes: null,
    email: 'mapview_testing_rejected@test.com',
    password: 'mapview_testing_rejected@test.com',
  },
}
