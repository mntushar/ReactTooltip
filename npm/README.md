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
'use client'

import { SelectItem, SelectorRequest, VirtualSelector } from "react-virtual-dropdown";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [selectedData, setSelectedData] = useState<string>('');
  const fetchData = useCallback(async (request: SelectorRequest) => {
    try {
      const params = new URLSearchParams({
            skip: request.startIndex.toString(),
            limit: request.limit.toString(),
            sortColumn: 'name',
            sortOrder: '',
            searchKey: request.searchKey ?? '',
        });
      const url = `https://your_url/comments?${params}`;
      const response = await fetch(url);
      if(!response.ok) throw new Error();
      const data = await response.json();
      const itemData = data.map(({ id, email }: { id: number, email: number }) => ({
        id: id.toString(), 
        name: email.toString() 
      }));
  
      const countUrl = `http://your_url/count?searchKey=${request.searchKey}`;
      const countResponse = await fetch(countUrl);
      if(!countResponse.ok) throw new Error();
      const count = await countResponse.json();
      return {
        items: itemData,
        totalCount: count,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        items: [],
        totalCount: 0,
      };
    }
  }, []);

  const getValue = (data: SelectItem) => {
    console.log(data.id, data.name);
  };

  const getSetData = async () => {
    const countUrl = `http://your_url/your-data-id`;
      const countResponse = await fetch(countUrl);
      if(!countResponse.ok) throw new Error();
      const data = await countResponse.json();
      setSelectedData(data);
  };

  useEffect(() => {
      getSetData()
  }, [])

  return (
    <div className={styles.page}>
      <h1>Alhadmulilah</h1>
      <div style={{width: "500px"}}>
      <VirtualSelector
          fetchData={fetchData}
          height={400}
          rowHeight={35}
          placeholder="Select Dropdown"
          selectedData={selectedData}
          callBack={getValue} />
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
