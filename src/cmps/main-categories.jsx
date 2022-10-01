import { NavLink } from "react-router-dom";


export function MainCategories() {

    //---- component rendering ----//
    return (
        <div className="main-container main-categories">
            <h2>Explore the marketplace</h2>
            <ul className="flex clean-list categories-list">

                <li className="categories-list-item">
                    <NavLink to="/explore?category=graphics-and-design">

                        <div className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189947/Fiverr-Sprint-4/imgs/icons/graphics-design_bqrdh5.svg" alt="" />
                            Graphics & Design
                        </div>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=digital-marketing">

                        <div className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/online-marketing_grviaq.svg" alt="" />
                            Digital Marketing
                        </div>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=writing-and-translation">

                        <div className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/writing-translation_ziit5b.svg" alt="" />
                            Writing & Translation
                        </div>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=video-and-animation">

                        <div className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/video-animation_mynund.svg" alt="" />
                            Video & Animation
                        </div>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=music-and-audio">

                        <div className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189947/Fiverr-Sprint-4/imgs/icons/music-audio_aze6yn.svg" alt="" />
                            Music & Audio
                        </div>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=programming-and-tech">

                        <div className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/programming_muazri.svg" alt="" />
                            Programming & Tech
                        </div>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=business">
                        <div className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/business_rztlok.svg" alt="" />
                            Business
                        </div>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=lifestyle">

                        <div className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189947/Fiverr-Sprint-4/imgs/icons/lifestyle_xd4pka.svg" alt="" />
                            Lifestyle
                        </div>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=business">
                        <div className="categories-link">
                            <div className="data-icon">
                                <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/data_xgawq7.svg" alt="" />
                            </div>
                            Data
                        </div>
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}