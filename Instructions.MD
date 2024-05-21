### React Native boilerplate for the .... App
1. For the flexibility not Expo version used.
2. Typescript is in DNA

## Env setup for ios
1. 

## Env set-up for Android
1. Install Node & Watchan: 
    ```bash
    brew install node
    brew install watchman
    ```
2. Install Java Development Kit:
    `brew install --cask zulu@17`
3. Get path to where cask was installed to double-click installer
    `brew info --cask zulu@17`
4. After installation update JAVA_HOME in `.zshrc` or `.zprofile`:
    `export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home`
5. Save the changes to `.zshrc` or `.zprofile`
    `source ~/.zshrc`

## Andropid Developpment Environment
1. Install Android Studio with `Android SDK`, `Android SDK Platform`, `Android Virtual Device`
2. Configure the ANDROID_HOME environment variable. Open `~/.zshrc` or `zprofile` and add these;
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```


