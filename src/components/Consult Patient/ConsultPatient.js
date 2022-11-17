import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ConsultPatient() {

    // Declare Data
	const initialPatient = {
		Pregnancies: '',
		Glucose: '',
		BloodPressure: '',
		SkinThickness: '',
		Insulin: '',
		BMI: '',
		DiabetesPedigreeFunction: '',
		Age: ''
	};

	// ########### adding data ############
	const [patientForm, setPatientForm] = useState([initialPatient]);
	
	// Change The Input Value For Add Form
	const handlePatientChange = (e) => {
		setPatientForm({
			...patientForm,
			[e.target.name]: e.target.value,
		});
	};
	
	
	// Add New Data To Database
	const submitPatient = (e) => {
        e.preventDefault()
		let data = {
			Pregnancies: patientForm.Pregnancies,
			Glucose: patientForm.Glucose,
			BloodPressure: patientForm.BloodPressure,
			SkinThickness: patientForm.SkinThickness,
			Insulin: patientForm.Insulin,
			BMI: patientForm.BMI,
			DiabetesPedigreeFunction: patientForm.DiabetesPedigreeFunction,
			Age: patientForm.Age
		}
		axios
			.post(`http://localhost:8000/predict`, data)
			.then((response) => {
				if(response.data.prediction === 0) {
                    alert("tested negative")
                }
                else if(response.data.prediction === 1) {
                    alert("tested positive")
                }
			})
			.catch((e) => {
				console.error(e);
			})
	};
	

	
	
	
	

	useEffect(() => {

	}, []);



  return (
    <section id="contact" className="contact-area pt-120 pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact-wrapper-form pt-115  wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <h4 className="contact-title pb-10"><i className="lni-envelope"></i> Consult Your <span>Patient.</span></h4>
                        
                        <form id="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-form mt-45">
                                        <input type="text" name="Pregnancies" placeholder="Pregnancies"
                                                    className="form-control"
													value={patientForm.Pregnancies}
													onChange={handlePatientChange}
													/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-form mt-45">
                                        <input type="text" name="Glucose" placeholder="Glucose"
                                                    className="form-control"
													value={patientForm.Glucose}
													onChange={handlePatientChange}
													/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-form mt-45">
                                        <input type="text" name="BloodPressure" placeholder="BloodPressure"
                                                    className="form-control"
													value={patientForm.BloodPressure}
													onChange={handlePatientChange}
													/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-form mt-45">
                                        <input type="text" name="SkinThickness" placeholder="SkinThickness"
                                                    className="form-control"
													value={patientForm.SkinThickness}
													onChange={handlePatientChange}
													/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-form mt-45">
                                        <input type="text" name="Insulin" placeholder="Insulin"
                                                    className="form-control"
													value={patientForm.Insulin}
													onChange={handlePatientChange}
													/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-form mt-45">
                                        <input type="text" name="BMI" placeholder="BMI"
                                                    className="form-control"
													value={patientForm.BMI}
													onChange={handlePatientChange}
													/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-form mt-45">
                                        <input type="text" name="DiabetesPedigreeFunction" placeholder="DiabetesPedigreeFunction"
                                                    className="form-control"
													value={patientForm.DiabetesPedigreeFunction}
													onChange={handlePatientChange}
													/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-form mt-45">
                                        <input type="text" name="Age" placeholder="Age"
                                                    className="form-control"
													value={patientForm.Age}
													onChange={handlePatientChange}
													/>
                                    </div>
                                </div>
                                <p className="form-message"></p>
                                <div className="col-md-12">
                                    <div className="contact-form mt-45">
                                        <button type="submit" className="main-btn" onClick={submitPatient}>Consult Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ConsultPatient