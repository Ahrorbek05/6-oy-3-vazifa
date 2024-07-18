import React, { useState } from 'react';
import './index.css';
import '../tabs'

function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='tabs'>
      <div className='tab-one'>
        <button onClick={() => handleTabClick('salom')} className={activeTab === 'salom' ? 'active' : ''}>Tab 1</button>
        <button onClick={() => handleTabClick('xayr')} className={activeTab === 'xayr' ? 'active' : ''}>Tab 2</button>
        <button onClick={() => handleTabClick('task')} className={activeTab === 'task' ? 'active' : ''}>Tab 3</button>
      </div>
      <div className='tab-second'>
        {activeTab === 'salom' && <div>SALOM</div>}
        {activeTab === 'xayr' && <div>XAYR</div>}
        {activeTab === 'task' && <div>TASK</div>}
      </div>
    </div>
  );
}

export default Tabs;
