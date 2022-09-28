

export function MainCategories() {

    //---- component rendering ----//
    return (
        <div className="main-container main-categories">
            <h2>Explore the marketplace</h2>
            <ul className="flex clean-list categories-list">

                <li className="categories-list-item">
                    <a className="categories-link" href="/explore?category=graphics-and-design">
                        <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189947/Fiverr-Sprint-4/imgs/icons/graphics-design_bqrdh5.svg" alt="" />
                        Graphics & Design
                    </a>
                </li>

                <li className="categories-list-item">
                    <a className="categories-link" href="/explore?category=digital-marketing">
                        <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/online-marketing_grviaq.svg" alt="" />
                        Digital Marketing
                    </a>
                </li>

                <li className="categories-list-item">
                    <a className="categories-link" href="/explore?category=writing-and-translation">
                        <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/writing-translation_ziit5b.svg" alt="" />
                        Writing & Translation
                    </a>
                </li>

                <li className="categories-list-item">
                    <a className="categories-link" href="/explore?category=video-and-animation">
                        <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/video-animation_mynund.svg" alt="" />
                        Video & Animation
                    </a>
                </li>

                <li className="categories-list-item">
                    <a className="categories-link" href="/explore?category=music-and-audio">
                        <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189947/Fiverr-Sprint-4/imgs/icons/music-audio_aze6yn.svg" alt="" />
                        Music & Audio
                    </a>
                </li>

                <li className="categories-list-item">
                    <a className="categories-link" href="/explore?category=programming-and-tech">
                        <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/programming_muazri.svg" alt="" />
                        Programming & Tech
                    </a>
                </li>

                <li className="categories-list-item">
                    <a className="categories-link" href="/explore?category=business">
                        <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/business_rztlok.svg" alt="" />
                        Business
                    </a>
                </li>

                <li className="categories-list-item">
                    <a className="categories-link" href="/explore?category=lifestyle">
                        <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189947/Fiverr-Sprint-4/imgs/icons/lifestyle_xd4pka.svg" alt="" />
                        Lifestyle
                    </a>
                </li>

                <li className="categories-list-item">
                    <a className="categories-link" href="/explore?category=business">
                        <div className="data-icon">
                        <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/data_xgawq7.svg" alt="" />
                        </div>
                        Data
                    </a>
                </li>

            </ul>
        </div>
    )
}