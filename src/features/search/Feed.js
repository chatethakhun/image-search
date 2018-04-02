import React from 'react'
import { FeedContainer } from '../../common/style/theme'
const Feed = ({img}) => (
    <FeedContainer>
        <img src={ img.urls.regular } alt=""/>
        <div className="credit">
            <div className="name">
                <p>{`Name is:  ${img.user.first_name} ${img.user.last_name}`}</p>
            </div>
        </div>
    </FeedContainer>
)

export default Feed