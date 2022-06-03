import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="mt-3 "style={{position:"fixed","font-weight":"bold"}}>
            <UserCard user={auth.user} />

            <div className="d-flex justify-content-between align-items-center my-2"style={{decoration:"none"}}>
                <h5 className="text-danger">Suggestions for you</h5>
                {
                     
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            
                            <div style={{"font-weight":"bold",color:"#1a1a1a"}}>
                                 &nbsp;
                                 &nbsp;
                            <UserCard key={user._id} user={user} >
                            &nbsp;
                            &nbsp;
                                <FollowBtn user={user} style={{"decoration":"none","font-weight":"bold"}}/>
                            </UserCard>
                            </div>
                        ))
                    }
                </div>
            }

            <div style={{opacity: 0.5}} className="my-2" >
                {/* <a href="https://www.youtube.com/c/DevATHTML" target="_blank" rel="noreferrer"
                style={{wordBreak: 'break-all'}} >
                    https://www.youtube.com/c/DevATHTML
                </a> */}
                {/* <small className="d-block">
                    Welcome to our channel "DevAT-VietNam"
                </small>

                <small>
                   &copy; 2021 V-NETWORK FROM DEV A.T VIET NAM
                </small> */}
            </div>

        </div>
    )
}

export default RightSideBar
