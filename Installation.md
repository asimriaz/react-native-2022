# Setting up the development environment

This page will help you install and build your first React Native app.

__If you are new to mobile development,___ the easiest way to get started is with Expo Go. Expo is a set of tools and services built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator. If you'd like to try out React Native directly in your web browser before installing any tools, you can try out Snack.

__If you are already familiar with mobile development,__ you may want to use React Native CLI. It requires Xcode or Android Studio to get started. If you already have one of these tools installed, you should be able to get up and running within a few minutes. If they are not installed, you should expect to spend about an hour installing and configuring them.

Follow these instructions if you need to build native code in your project. For example, if you are integrating React Native into an existing application, or if you ran "prebuild" from Expo to generate your project's native code, you'll need this section.

The instructions are a bit different depending on your development operating system, and whether you want to start developing for iOS or Android. If you want to develop for both Android and iOS, that's fine - you can pick one to start with, since the setup is a bit different.

# Expo Go Quickstart

# Development for Windows - Android

## Installing dependencies

You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

## Node, JDK
We recommend installing Node via [Chocolatey](https://chocolatey.org/), a popular package manager for Windows.

It is recommended to use an LTS version of Node. If you want to be able to switch between different versions, you might want to install Node via [nvm-windows](https://github.com/coreybutler/nvm-windows), a Node version manager for Windows.

React Native also requires [Java SE Development Kit (JDK),](https://openjdk.java.net/projects/jdk/11/) which can be installed using Chocolatey as well.

Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:
```
choco install -y nodejs-lts openjdk11
```

If you have already installed Node on your system, make sure it is Node 14 or newer. If you already have a JDK on your system, we recommend JDK11. You may encounter problems using higher JDK versions.

> You can find additional installation options on [Node's Downloads page](https://nodejs.org/en/download/).

> If you're using the latest version of Java Development Kit, you'll need to change the Gradle version of your project so it can recognize the JDK. You can do that by going to {project root folder}\android\gradle\wrapper\gradle-wrapper.properties and changing the distributionUrl value to upgrade the Gradle version. You can check out [here the latest releases of Gradle](https://gradle.org/releases/).

## Android development environment
Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

**1. Install Android Studio**

[Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

- Android SDK
- Android SDK Platform
- Android Virtual Device
- If you are not already using Hyper-V: Performance (Intel ® HAXM) [(See here for AMD or Hyper-V)](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)

Then, click "Next" to install all of these components.

If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

**2. Install the Android SDK**

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 12 (S) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".

![](https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeWindows-ce20d1230828a1a26e143e3a4145f1df.png)

> The SDK Manager can also be found within the Android Studio "Preferences" dialog, under __Appearance & Behavior → System Settings → Android SDK.__

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 12 (S) entry, then make sure the following items are checked:

- Android SDK Platform 31
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 31.0.0 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

**3. Configure the ANDROID_HOME environment variable**

The React Native tools require some environment variables to be set up in order to build apps with native code.

1. Open the __Windows Control Panel__.
2. Click on __User Accounts__, then click __User Accounts__ again
3. Click on __Change my environment variables__
4. Click on __New...__ to create a new ANDROID_HOME user variable that points to the path to your Android SDK:

![ANDROID_HOME](https://github.com/asimriaz/react-native-2022/blob/main/ANDROID_HOME.png)

The SDK is installed, by default, at the following location:

```
%LOCALAPPDATA%\Android\Sdk
```

You can find the actual location of the SDK in the Android Studio "Settings" dialog, under Appearance & Behavior → System Settings → Android SDK.

Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

1. Open powershell
2. Copy and paste **Get-ChildItem -Path Env:\\** into powershell
3. Verify ANDROID_HOME has been added

**4. Add platform-tools to Path**

1. Open the __Windows Control Panel__.
2. Click on __User Accounts__, then click __User Accounts__ again
3. Click on __Change my environment variables__
4. Select the __Path__ variable.
5. Click __Edit__.
6. Click __New__ and add the path to platform-tools to the list.

The default location for this folder is:

```
%LOCALAPPDATA%\Android\Sdk\platform-tools
```

## React Native Command Line Interface

React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using npx, which ships with Node.js. With npx react-native <command>, the current stable version of the CLI will be downloaded and executed at the time the command is run.

## Creating a new application

```
npx create-expo-app AwesomeProject

cd AwesomeProject
npm start # you can also use: npx expo start
```
