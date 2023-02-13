import Styles from "./Styles.module.css";

interface LayoutProps{
    children: JSX.Element | JSX.Element[];
}

function Layout({children}:LayoutProps) {
  return (
    <div className={Styles.layout}>
        {children}
    </div>
  )
}

export default Layout;