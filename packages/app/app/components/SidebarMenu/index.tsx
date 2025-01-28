import React from 'react';

import * as styles from './styles.scss';

const SidebarMenu: React.FC = ({ children }) => (
  <div
    data-testid='sidebar-menu'
    className={styles.sidebar_menu}
  >
    {children}
  </div>
);

export default SidebarMenu;
