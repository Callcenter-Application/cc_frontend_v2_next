export const MainContent = () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
        <main>
            <header className="secondHeader">
                <h2>Second title</h2>
            </header>
            
            <div>
                <div>
                    {/* Keep this empty for the moment */}
                </div>
                <figure>
                    <figcaption>
                        <h3>Numbers</h3>
                    </figcaption>
                    <ul>
                        {numbers.map((number, index) => (
                            <li key={index}>
                                {number}
                            </li>
                        ))} 
                    </ul>
                </figure>
            </div>
        </main>
    )
}