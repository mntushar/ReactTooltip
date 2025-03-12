# React Tooltip Component
A simple React tooltip component with customizable position.

#### Props
- **text** - The text displayed in the tooltip.
- **possition** - The position of the tooltip (top, bottom, left, right).

# Getting started
### Install `react-tooltip-com` using npm.

```npm i react-tooltip-com```

### Setup
```
import { Tooltip } from "react-tooltip-com";

import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Alhamdulillah</h1>
      <div>
        <Tooltip text="Hi, I am Tooltip" possition='right'>
          <span>Tooltip</span>
        </Tooltip>
      </div>
      <div>
        <Tooltip text="Hi, I am Tooltip" possition='left'>
          <span>Tooltip</span>
        </Tooltip>
      </div>
      <div>
        <Tooltip text="Hi, I am Tooltip" possition='top'>
          <span>Tooltip</span>
        </Tooltip>
      </div>
      <div>
        <Tooltip text="Hi, I am Tooltip" possition='bottom'>
          <span>Tooltip</span>
        </Tooltip>
      </div>
    </div>
  );
}

```
Now you're ready to start using the components.

### Output
<p align="center" style="background-color: #f6f8fa;">
  <img src="https://github.com/mntushar/ReactTooltip/blob/main/OutputImages/Screenshot%20(1).png" alt="Output Image One" width="400"/>
  <img src="https://github.com/mntushar/ReactTooltip/blob/main/OutputImages/Screenshot%20(2).png" alt="Output Image Two" width="400"/>
  <img src="https://github.com/mntushar/ReactTooltip/blob/main/OutputImages/Screenshot%20(3).png" alt="Output Image Three" width="400"/>
  <img src="https://github.com/mntushar/ReactTooltip/blob/main/OutputImages/Screenshot%20(4).png" alt="Output Image Three" width="400"/>
</p>


### Dependencies
react-virtual-dropdown has very few dependencies and most are managed by NPM automatically.


### Supported Browsers
react-virtual-dropdown aims to support all evergreen browsers and recent mobile browsers for iOS and Android. IE 9+ is also supported (although IE 9 will require some user-defined, custom CSS since flexbox layout is not supported).


### Notes
- Make sure possition is spelled correctly in the code as position.
- Ensure proper styling is added for different positions (top, bottom, left, right).
- This tooltip component does not include advanced positioning logic; it works best in simple layouts.
