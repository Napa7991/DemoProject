export const Body = () => {
    return (
        <>
            <section>
                <div className="box flex">
                    <div className="left w-full md:w-1/2 flex justify-center">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Brooklyn" alt="Tailanng huwal" />
                    </div>
                    {/* <div className="right flex flex-col w-full md:w-1/2"> */}
                    <div className="right flex flex-col w-full md:w-1/2 items-center text-center m-auto">
                        <h1>Tailang Napa</h1>
                        <div className="para ">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Odio labore fuga ipsam vel, amet consequatur rerum sed maiores iure neque,
                                incidunt id aut asperiores eligendi sequi repellat? Exercitationem, ex.
                                Reiciendis!
                            </p>
                            <button>Click Me</button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
