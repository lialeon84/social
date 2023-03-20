import React from 'react'
import Navig from './Nav';
//import { collection, addDoc } from "firebase/firestore";

   function Feed() {
      
  return (
    <>
    <Navig/>
    <div id="content-page" className="content-page">
<div className="container">
   <div className="row">
      <div className="col-lg-8 row m-0 p-0">
         <div className="col-sm-12">
            <div id="post-modal-data" className="card card-block card-stretch card-height">
               <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                     <h4 className="card-title">Create Post</h4>
                  </div>
               </div>
               <div className="card-body">
                  <div className="d-flex align-items-center">
                     <div className="user-img">
                        <img src="../#" alt="userimg" className="avatar-60 rounded-circle" loading="lazy" />
                     </div>
                     <form className="post-text ms-3 w-100 " data-bs-toggle="modal" data-bs-target="#post-modal" >
                        <input type="text" className="form-control rounded" placeholder="Write something here..."  />
                     </form>
                  </div>
                  <hr></hr>
                  <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                     <li className="me-3 mb-md-0 mb-2">
                        <a href="/#" className="btn btn-soft-primary">
                        <img src="../#" alt="icon" className="img-fluid me-2" loading="lazy" /> Photo/Video
                        </a>
                     </li>
                     <li className="me-3 mb-md-0 mb-2">
                        <a href="/#" className="btn btn-soft-primary">
                        <img src="../#" alt="icon" className="img-fluid me-2" loading="lazy" /> Tag Friend
                        </a>
                     </li>
                     <li className="me-3">
                        <a href="/#" className="btn btn-soft-primary">
                        <img src="../#" alt="icon" className="img-fluid me-2" loading="lazy" /> Feeling/Activity
                        </a>
                     </li>
                     <li>
                        <div className="btn btn-soft-primary">
                           <div className="card-header-toolbar d-flex align-items-center">
                              <div className="dropdown">
                                 <div className="dropdown-toggle lh-1" id="post-option" data-bs-toggle="dropdown">
                                    <span className="material-symbols-outlined">
                                    more_horiz
                                    </span>
                                 </div>
                                 <div className="dropdown-menu dropdown-menu-right" aria-labelledby="post-option">
                                    <a className="dropdown-item" href="/#" data-bs-toggle="modal" data-bs-target="#post-modal">Check in</a>
                                    <a className="dropdown-item" href="/#" data-bs-toggle="modal" data-bs-target="#post-modal">Live Video</a>
                                    <a className="dropdown-item" href="/#" data-bs-toggle="modal" data-bs-target="#post-modal">Gif</a>
                                    <a className="dropdown-item" href="/#" data-bs-toggle="modal" data-bs-target="#post-modal">Watch Party</a>
                                    <a className="dropdown-item" href="/#" data-bs-toggle="modal" data-bs-target="#post-modal">Play with Friend</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
               <div className="modal fade" id="post-modal"  aria-labelledby="post-modalLabel" aria-hidden="true">
                  <div className="modal-dialog   modal-fullscreen-sm-down">
                     <div className="modal-content">
                        <div className="modal-header">
                           <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
                           <a href="/#" className="lh-1" data-bs-dismiss="modal">
                              <span className="material-symbols-outlined">close</span>
                           </a>
                        </div>
                        <div className="modal-body">
                           <div className="d-flex align-items-center">
                              <div className="user-img">
                                 <img src="../#" alt="userimg" className="avatar-60 rounded-circle img-fluid" loading="lazy" />
                              </div>
                              <form className="post-text ms-3 w-100">
                                 <input type="text" className="form-control rounded" placeholder="Write something here..."  />
                              </form>
                           </div>
                           <hr></hr>
                           <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                              <li className="col-md-6 mb-3">
                                 <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="/#">hi</a><img src="../#" alt="icon" className="img-fluid" loading="lazy" /> Photo/Video</div>
                              </li>
                              <li className="col-md-6 mb-3">
                                 <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="/#">hi</a><img src="../#" alt="icon" className="img-fluid" loading="lazy" /> Tag Friend</div>
                              </li>
                              <li className="col-md-6 mb-3">
                                 <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="/#">ho</a><img src="../#" alt="icon" className="img-fluid" loading="lazy" /> Feeling/Activity</div>
                              </li>
                              <li className="col-md-6 mb-3">
                                 <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="/#">ho</a><img src="../#" alt="icon" className="img-fluid" loading="lazy" /> Check in</div>
                              </li>
                              <li className="col-md-6 mb-3">
                                 <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="/#">hi</a><img src="../#" alt="icon" className="img-fluid" loading="lazy" /> Live Video</div>
                              </li>
                              <li className="col-md-6 mb-3">
                                 <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="/#">hi</a><img src="../#" alt="icon" className="img-fluid" loading="lazy" /> Gif</div>
                              </li>
                              <li className="col-md-6 mb-3">
                                 <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="/#">hi</a><img src="../#" alt="icon" className="img-fluid" loading="lazy" /> Watch Party</div>
                              </li>
                              <li className="col-md-6 mb-3">
                                 <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="/#">hi</a><img src="../#" alt="icon" className="img-fluid" loading="lazy" /> Play with Friends</div>
                              </li>
                           </ul>
                           <hr></hr>
                           <div className="other-option">
                              <div className="d-flex align-items-center justify-content-between">
                                 <div className="d-flex align-items-center">
                                    <div className="user-img me-3">
                                       <img src="../#" alt="userimg" className="avatar-60 rounded-circle img-fluid" />
                                    </div>
                                    <h6>Your Story</h6>
                                 </div>
                                 <div className="card-post-toolbar">
                                    <div className="dropdown">
                                       <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                       <span className="btn btn-primary">Friend</span>
                                       </span>
                                       <div className="dropdown-menu m-0 p-0">
                                          <a className="dropdown-item p-3" href="/#">
                                             <div className="d-flex align-items-top">
                                                <span className="material-symbols-outlined">
                                                   save
                                                </span>
                                                <div className="data ms-2">
                                                   <h6>Public</h6>
                                                   <p className="mb-0">Anyone on or off Facebook</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="/#">
                                             <div className="d-flex align-items-top">
                                                <span className="material-symbols-outlined">
                                                   cancel
                                                </span>
                                                <div className="data ms-2">
                                                   <h6>Friends</h6>
                                                   <p className="mb-0">Your Friend on facebook</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="/#">
                                             <div className="d-flex align-items-top">
                                               <span className="material-symbols-outlined">
                                                person_remove
                                                </span>
                                                <div className="data ms-2">
                                                   <h6>Friends except</h6>
                                                   <p className="mb-0">Don't show to some friends</p>
                                                </div>
                                             </div>
                                          </a>
                                          <a className="dropdown-item p-3" href="/#">
                                             <div className="d-flex align-items-top">
                                                <span className="material-symbols-outlined">
                                                   notifications
                                                </span>
                                                <div className="data ms-2">
                                                   <h6>Only Me</h6>
                                                   <p className="mb-0">Only me</p>
                                                </div>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <button type="submit" className="btn btn-primary d-block w-100 mt-3">Post</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-sm-12">
            <div className="card card-block card-stretch card-height">
               <div className="card-body">
                  <div className="user-post-data">
                     <div className="d-flex justify-content-between">
                        <div className="me-3">
                           <img className="rounded-circle img-fluid" src="../#" alt="" loading="lazy" />
                        </div>
                        <div className="w-100">
                           <div className="d-flex justify-content-between">
                              <div className="">
                              
                         
                                   
                                 <h5 className="mb-0 d-inline-block">
                                   
                                    

                                    </h5>
                                 <span className="mb-0 d-inline-block">Add New Post</span>
                                 <p className="mb-0 text-primary">Just Now</p>
                              </div>
                              <div className="card-post-toolbar">
                                 <div className="dropdown">
                                    <span className="dropdown-toggle material-symbols-outlined" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                       more_horiz
                                    </span>
                                    <div className="dropdown-menu m-0 p-0">
                                       <a className="dropdown-item p-3" href="/#">
                                          <div className="d-flex align-items-top">
                                             <span className="material-symbols-outlined">
                                             save
                                             </span>
                                             <div className="data ms-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                             </div>
                                          </div>
                                       </a>
                                       <a className="dropdown-item p-3" href="/#">
                                          <div className="d-flex align-items-top">
                                             <span className="material-symbols-outlined">
                                             cancel
                                             </span>
                                             <div className="data ms-2">
                                                <h6>Hide Post</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                             </div>
                                          </div>
                                       </a>
                                       <a className="dropdown-item p-3" href="/#">
                                          <div className="d-flex align-items-top">
                                             <span className="material-symbols-outlined">
                                                   person_remove
                                             </span>
                                             <div className="data ms-2">
                                                <h6>Unfollow User</h6>
                                                <p className="mb-0">Stop seeing posts but stay friends.</p>
                                             </div>
                                          </div>
                                       </a>
                                       <a className="dropdown-item p-3" href="/#">
                                          <div className="d-flex align-items-top">
                                             <span className="material-symbols-outlined">
                                             notifications
                                             </span>
                                             <div className="data ms-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">Turn on notifications for this post</p>
                                             </div>
                                          </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-3">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                  </div>
                  <div className="user-post">
                     <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                        <div className="row-span-2 row-span-md-1">
                           
                        </div>
                        <div className="row-span-1">
                      
                        </div>
                        <div className="row-span-1 ">
                           
                        </div>
                     </div>
                  </div>
                  <div className="comment-area mt-3">
                     <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="like-block position-relative d-flex align-items-center">
                           <div className="d-flex align-items-center">
                              <div className="like-data">
                                 <div className="dropdown">
                                    <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                    <img src="../#" className="img-fluid" alt="" />
                                    </span>
                                    <div className="dropdown-menu py-2">
                                       <a className="ms-2 me-2" href="/#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Like"><img src="../#" className="img-fluid" alt="" loading="lazy" /></a>
                                       <a className="me-2" href="/#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Love"><img src="../#" className="img-fluid" alt="" loading="lazy" /></a>
                                       <a className="me-2" href="/#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Happy"><img src="../#" className="img-fluid" alt="" loading="lazy" /></a>
                                       <a className="me-2" href="/#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="HaHa"><img src="../#" className="img-fluid" alt="" loading="lazy" /></a>
                                       <a className="me-2" href="/#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Think"><img src="../#" className="img-fluid" alt="" loading="lazy" /></a>
                                       <a className="me-2" href="/#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Sade"><img src="../#" className="img-fluid" alt="" loading="lazy" /></a>
                                       <a className="me-2" href="/#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Lovely"><img src="../#" className="img-fluid" alt="" loading="lazy" /></a>
                                    </div>
                                 </div>
                              </div>
                              <div className="total-like-block ms-2 me-3">
                                 <div className="dropdown">
                                    <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                    140 Likes
                                    </span>
                                    <div className="dropdown-menu">
                                       <a className="dropdown-item" href="/#">Max Emum</a>
                                       <a className="dropdown-item" href="/#">Bill Yerds</a>
                                       <a className="dropdown-item" href="/#">Hap E. Birthday</a>
                                       <a className="dropdown-item" href="/#">Tara Misu</a>
                                       <a className="dropdown-item" href="/#">Midge Itz</a>
                                       <a className="dropdown-item" href="/#">Sal Vidge</a>
                                       <a className="dropdown-item" href="/#">Other</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="total-comment-block">
                              <div className="dropdown">
                                 <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                 20 Comment
                                 </span>
                                 <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/#">Max Emum</a>
                                    <a className="dropdown-item" href="/#">Bill Yerds</a>
                                    <a className="dropdown-item" href="/#">Hap E. Birthday</a>
                                    <a className="dropdown-item" href="/#">Tara Misu</a>
                                    <a className="dropdown-item" href="/#">Midge Itz</a>
                                    <a className="dropdown-item" href="/#">Sal Vidge</a>
                                    <a className="dropdown-item" href="/#">Other</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                           <a href="/#" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn" className="d-flex align-items-center">
                           <span className="material-symbols-outlined md-18">
                           share
                           </span>
                           <span className="ms-1">99 Share</span></a>                           
                        </div>
                     </div>
                     <hr></hr>
                     <ul className="post-comments list-inline p-0 m-0">
                        <li className="mb-2">
                           <div className="d-flex">
                              <div className="user-img">
                                 <img src="../#" alt="userimg" className="avatar-35 rounded-circle img-fluid" loading="lazy" />
                              </div>
                              <div className="comment-data-block ms-3">
                                 <h6>Monty Carlo</h6>
                                 <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                 <div className="d-flex flex-wrap align-items-center comment-activity">
                                    <a href="/#">like</a>
                                    <a href="/#">reply</a>
                                    <a href="/#">translate</a>
                                    <span> 5 min </span>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li>
                           <div className="d-flex">
                              <div className="user-img">
                                 <img src="../#" alt="userimg" className="avatar-35 rounded-circle img-fluid" loading="lazy" />
                              </div>
                              <div className="comment-data-block ms-3">
                                 <h6>Paul Molive</h6>
                                 <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                 <div className="d-flex flex-wrap align-items-center comment-activity">
                                    <a href="/#">like</a>
                                    <a href="/#">reply</a>
                                    <a href="/#">translate</a>
                                    <span> 5 min </span>
                                 </div>
                              </div>
                           </div>
                        </li>
                     </ul>
                     <form className="comment-text d-flex align-items-center mt-3" >
                        <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                        <div className="comment-attagement d-flex">
                           <a href="/#" className="material-symbols-outlined me-3 link">
                           insert_link
                           </a>
                           <a href="/#" className="material-symbols-outlined  me-3">
                           sentiment_satisfied
                           </a>
                           <a href="/#" className="material-symbols-outlined  me-3">
                           photo_camera
                           </a>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
        
        
         
      <div className="col-sm-12"></div>
 
      <div className="col-lg-4">
         <div className="card">
            <div className="card-header d-flex justify-content-between">
               <div className="header-title">
                  <h4 className="card-title">Stories</h4>
               </div>
            </div>
            <div className="card-body">
               <ul className="media-story list-inline m-0 p-0">
                  <li className="d-flex mb-3 align-items-center">
                     <i className="material-symbols-outlined">
                     add
                     </i>
                     <div className="stories-data ms-3">
                        <h5>Creat Your Story</h5>
                        <p className="mb-0">time to story</p>
                     </div>
                  </li>
                  <li className="d-flex mb-3 align-items-center active">
                     <img src="../#" alt="story-img" className="rounded-circle img-fluid"/>
                     <div className="stories-data ms-3">
                        <h5>Anna Mull</h5>
                        <p className="mb-0">1 hour ago</p>
                     </div>
                  </li>
                  <li className="d-flex mb-3 align-items-center">
                     <img src="../#" alt="story-img" className="rounded-circle img-fluid"/>
                     <div className="stories-data ms-3">
                        <h5>Ira Membrit</h5>
                        <p className="mb-0">4 hour ago</p>
                     </div>
                  </li>
                  <li className="d-flex align-items-center">
                     <img src="../#" alt="story-img" className="rounded-circle img-fluid"/>
                     <div className="stories-data ms-3">
                        <h5>Bob Frapples</h5>
                        <p className="mb-0">9 hour ago</p>
                     </div>
                  </li>
               </ul>
               <a href="/#" className="btn btn-primary d-block mt-3">See All</a>
            </div>
         </div>
         <div className="card">
            <div className="card-header d-flex justify-content-between">
               <div className="header-title">
                  <h4 className="card-title">Events</h4>
               </div>
               <div className="card-header-toolbar d-flex align-items-center">
                  <div className="dropdown">
                     <div className="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                        <span className="material-symbols-outlined">
                        more_horiz
                        </span>
                     </div>
                     <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item d-flex align-items-center" href="/#"><span className="material-symbols-outlined me-2 md-18">
                        visibility
                        </span>View</a>
                        <a className="dropdown-item d-flex align-items-center" href="/#"><span className="material-symbols-outlined me-2 md-18">
                        delete
                        </span>Delete</a>
                        <a className="dropdown-item d-flex align-items-center" href="/#"><span className="material-symbols-outlined me-2 md-18">
                        edit
                        </span>Edit</a>
                        <a className="dropdown-item d-flex align-items-center" href="/#"><span className="material-symbols-outlined me-2 md-18">
                        print
                        </span>Print</a>
                        <a className="dropdown-item d-flex align-items-center" href="/#"><span className="material-symbols-outlined me-2 md-18">
                        file_download
                        </span>Download</a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card-body">
               <ul className="media-story list-inline m-0 p-0" >
                  <li className="d-flex mb-4 align-items-center " >
                     <img src="../#" alt="story-img" className="rounded-circle img-fluid" loading="lazy" />
                     <div className="stories-data ms-3">
                        <h5>Web Workshop</h5>
                        <p className="mb-0">1 hour ago</p>
                     </div>
                  </li>
                  <li className="d-flex align-items-center">
                     <img src="../#" alt="story-img" className="rounded-circle img-fluid" loading="lazy" />
                     <div className="stories-data ms-3">
                        <h5>Fun Events and Festivals</h5>
                        <p className="mb-0">1 hour ago</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
         <div className="card">
            <div className="card-header d-flex justify-content-between">
               <div className="header-title">
                  <h4 className="card-title">Upcoming Birthday</h4>
               </div>
            </div>
            <div className="card-body">
               <ul className="media-story list-inline m-0 p-0">
                  <li className="d-flex mb-4 align-items-center">
                     <img src="../#" alt="story-img" className="rounded-circle img-fluid" loading="lazy"/>
                     <div className="stories-data ms-3">
                        <h5>Anna Sthesia</h5>
                        <p className="mb-0">Today</p>
                     </div>
                  </li>
                  <li className="d-flex align-items-center">
                     <img src="../#" alt="story-img" className="rounded-circle img-fluid" loading="lazy"/>
                     <div className="stories-data ms-3">
                        <h5>Paul Molive</h5>
                        <p className="mb-0">Tomorrow</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
         <div className="card">
            <div className="card-header d-flex justify-content-between">
               <div className="header-title">
                  <h4 className="card-title">Suggested Pages</h4>
               </div>
               <div className="card-header-toolbar d-flex align-items-center">
                  <div className="dropdown">
                     <div className="dropdown-toggle" id="dropdownMenuButton01" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                        <span className="material-symbols-outlined">
                        more_horiz
                        </span>
                     </div>
                     <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                        <a className="dropdown-item d-flex align-items-center" href="/#"><span className="material-symbols-outlined me-2 md-18">
                        visibility
                        </span>View</a>
                        <a className="dropdown-item d-flex align-items-center" href="/#"><span className="material-symbols-outlined me-2 md-18">
                        delete
                        </span>Delete</a>
                        <a className="dropdown-item d-flex align-items-center" href="/#"><span className="material-symbols-outlined me-2 md-18">
                        edit
                        </span>Edit</a>
                        <a className="dropdown-item d-flex align-items-center" href="/#"><span className="material-symbols-outlined me-2 md-18">
                        print
                        </span>Print</a>
                        <a className="dropdown-item d-flex align-items-center" href="/#"><span className="material-symbols-outlined me-2 md-18">
                        file_download
                        </span>Download</a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card-body">
               <ul className="suggested-page-story m-0 p-0 list-inline">
                  <li className="mb-3">
                     <div className="d-flex align-items-center mb-3">
                        <img src="../#" alt="story-img" className="rounded-circle img-fluid avatar-50" loading="lazy"/>
                        <div className="stories-data ms-3">
                           <h5>Iqonic Studio</h5>
                           <p className="mb-0">Lorem Ipsum</p>
                        </div>
                     </div>
                    
                     <div className="mt-3"><a href="/#" className=" d-flex align-items-center justify-content-center"><span className="material-symbols-outlined me-2 md-18">
                        thumb_up
                        </span> Like Page</a>
                     </div>
                  </li>
                  <li className="">
                     <div className="d-flex align-items-center mb-3">
                        <img src="../#" alt="story-img" className="rounded-circle img-fluid avatar-50" loading="lazy"/>
                        <div className="stories-data ms-3">
                           <h5>Cakes &amp; Bakes </h5>
                           <p className="mb-0">Lorem Ipsum</p>
                        </div>
                     </div>
               
                     <div className="mt-3"><a href="/#" className=" d-flex align-items-center justify-content-center"><span className="material-symbols-outlined me-2 md-18">
                        thumb_up
                        </span> Like Page</a>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div className="col-sm-12 text-center">
         <img src="../#" alt="loader" loading="lazy"/>
      </div>
   </div>
</div>
    </div></div>
    </>  )
}

export default Feed;