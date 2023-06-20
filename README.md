# ConfigCat with Docker Sample

A companion repository for the blog article titled: **Using ConfigCat with Docker**.

This sample repository contains the code for a demo Docker desktop extension. It includes the code and dependencies required to successfully use a feature flag to hide and show a child component of the extension.

## Build & Install

1. Build the extension using the following command:

```sh
docker build -t my-extension .
```

2. Install the built extension:

```sh
docker extension install my-extension
```

3. The installed extension displays in your Docker desktop application:

![modified-extension-with-switch](https://github.com/configcat-labs/configcat-with-docker-sample/assets/74829200/ecf8c78b-76da-49a5-a59d-68409538ae70)

## Learn more

If you'd like to learn more, check out the following links:

- [Docker extensions Quickstart](https://docs.docker.com/desktop/extensions-sdk/quickstart/)
- [ConfigCat React SDK Reference](https://configcat.com/docs/sdk-reference/react/)
- [Custom cache implementation with ConfigCat](https://configcat.com/docs/sdk-reference/react/#using-custom-cache-implementation)
- [How to use ConfigCat with Redis](https://configcat.com/blog/2023/06/05/how-to-use-configcat-with-redis/)

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/).

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author

[Chavez Harris](https://github.com/codedbychavez)

