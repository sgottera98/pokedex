import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

import './styles.css'

const ComponentSkeleton = () => {
    return(
        <SkeletonTheme color="#E9ECEF" highlightColor="#FFF" >
            <div className="skeleton-nav">
                <Skeleton height={"6vh"}/>
            </div>
            <div className="skeleton-card">
                <Skeleton count={20} height={448} width={250}/>
            </div>
        
        </SkeletonTheme>
    )
        
}


export default ComponentSkeleton;