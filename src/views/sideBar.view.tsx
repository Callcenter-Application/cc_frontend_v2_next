export const SideBar = () => {
    const menuItems = ["Dashboard", "Operations", "Configuration", "Analytics"];

    return (
        <div className="sidebar-container">
            <section className="logo">
                <p>CallBook</p>
            </section>
            <section className="navigation">
                <nav>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={`/${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </div>
    );
};
