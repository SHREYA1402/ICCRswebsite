import React, { Component } from 'react';
import './Myprofile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export  class Myprofile extends Component {
	state = {
		profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
	}
	imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				this.setState({ profileImg: reader.result })
			}
		}
		reader.readAsDataURL(e.target.files[0])
	};
	render() {
		const { profileImg } = this.state
		return (
			
				<form >
					<div className="square border border-3">
					<div className="addpic">
						<div className="page">
							<div className="imagecontainer">
								<h1 className="picheading">Set profile</h1>

								<div className="pic-holder">
									<img src={profileImg} alt="" id="" className="img" />
								</div>

								<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />

								<div className="label">
									<label className="image-upload" htmlFor="input">
										<i className="material-icons"></i>
										Choose your Photo
									</label>
								</div>
								<hr />
								<h1 className="picheading">About</h1><br /><br />

								<div className='infocontainer'>

									<div className="row">


										<div className="col-md-12 pl-5 about-info">
											<div className="tab-content profile-tab" id="myTabContent">
												<div className="tab-pane fade show active" id="home" role="tabpanel" >

													<div className="row">
														<div className="col-md-6">

															<label>Name </label>
														</div>
														<div className="col-md-4 ">
															<p>userkaname</p>

														</div>
													</div>

													<div className="row">
														<div className="col-md-6">

															<label> Email </label>
														</div>
														<div className="col-md-6">
															<p>@useremail</p>

														</div>
													</div>
													<div className="row">
														<div className="col-md-6">

															<label> Phone No </label>
														</div>
														<div className="col-md-6">
															<p>1234567891</p>

														</div>
													</div>
													<div className="row">
														<div className="col-md-6">

															<label> profession </label>
														</div>
														<div className="col-md-6">
															<p>EventOrganizer</p>

														</div>
													</div>

												</div>
											</div>




										</div>
									</div>
								</div>


							</div>

						</div >



					</div >
				
					</div>
				</form>

			


		);
	}
}

