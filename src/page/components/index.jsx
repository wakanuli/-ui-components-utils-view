import React, { useState } from "react";

import { Drawer } from "antd";

const UtilsView = () => {
	const [DrawerVis, setDrawerVis] = useState(false);
	const callback = (value) => {
		console.log(value);
	};
	return (
		<Drawer title="工具箱" onClose={setDrawerVis} visible={DrawerVis}>
			<Tabs defaultActiveKey="1" onChange={callback}>
				<TabPane tab="Tab 1" key="1">
					Content of Tab Pane 1
				</TabPane>
				<TabPane tab="Tab 2" key="2">
					Content of Tab Pane 2
				</TabPane>
				<TabPane tab="Tab 3" key="3">
					Content of Tab Pane 3
				</TabPane>
			</Tabs>
		</Drawer>
	);
};

export default UtilsView;
