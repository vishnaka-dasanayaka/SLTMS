import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse, reset } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

function PayForCourse() {

  const [reqCourse,setCourse] = useState();

  const getSingleCourse = async () => {
    try {
      const course = await axios.get(`/courses/getsinglecourse/${courseId}`)
      setCourse(course.data);
      console.log(course);
    } catch (error) {
      console.log(error);
    }
  }

  const dispatch = useDispatch();

  const params = useParams();
  const courseId = params.id;

  const studentId = useSelector((state) => state.auth.user._id);

  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.users
  );

  useEffect(() => {

    getSingleCourse();
    if (isSuccess) toast.success("Enrollment Successfull");
    if (isError) toast.error("Error Occured");

    return () => {
      dispatch(reset());
    };
  }, [isError, isSuccess, message, dispatch, reqCourse]);

  // const onCLick = () => {
  //   dispatch(enrollCourse({ courseId, studentId }));
  // };

  if (isLoading) return <Spinner />;

  if(!reqCourse) return <Spinner/>

  console.log(reqCourse);

 // const publishableKey =
 // 'pk_test_51KAs34JBPfp3exDP5KZ00E3s265wlWQ2O3pKoxEWxuOhzpsfVTqZ3qPMgtLweUqwbmabFS1xrTboUY6MxEAMsBOG00pmyBOyR8';
// const [product, setProduct] = useState({
//   name: 'Headphone',
//   price: 5,
// });
// const priceForStripe = product.price * 100;

// const handleSuccess = () => {
//   MySwal.fire({
//     icon: 'success',
//     title: 'Payment was successful',
//     time: 4000,
//   });
// };
// const handleFailure = () => {
//   MySwal.fire({
//     icon: 'error',
//     title: 'Payment was not successful',
//     time: 4000,
//   });
// };
const payNow = async token => {
  try {
    const response = await axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: reqCourse.fee,
        token,
      },
    });
    if (response.status === 200) {
      //handleSuccess();
      dispatch(enrollCourse({ courseId, studentId }));
      toast.success("Payment Success");
    }
  } catch (error) {
   // handleFailure();
    console.log(error);
  }
};

  return (
    <div>
      <Navbar />
      <div className="flex ">
        <div className="w-1/12 bg-[#d9d9d9] opacity-50 h-[100vh]">
          <ol className="text-center scale-[2] mt-32">
            <li className="py-2">
              <Link to={"/studentDashboard"}>
                <DashboardIcon />
              </Link>
            </li>

            <li className="py-2 ">
              <Link to={"/studentCourses"}>
                <LibraryBooksIcon />
              </Link>
            </li>

            <li className="py-2 ">
              <Link to={"/studentProfile"}>
                <AccountBoxIcon />
              </Link>
            </li>

            <li className="py-2 active">
              <Link to={"/studentPay"}>
                <PaidIcon />
              </Link>
            </li>

            <li className="py-2 ">
              <Link to={"/studentProfile"}>
                <HelpCenterIcon />
              </Link>
            </li>
          </ol>
        </div>

        <div className="flex flex-col mx-[5vw] w-10/12 justify-start">
          <div className="mt-[8vh] mb-[3vh] font-bold text-2xl">
            <h1>Order Details</h1>
          </div>

          <div className="flex items-center">
            <div className="scale-[0.4] -ml-[6vw]">
              <img src="../img/math-teacher.jpg" alt="" />
            </div>

            <div className="flex justify-between w-full bg-gradient-to-r from-slate-100 to-slate-300 -ml-[2vw] px-[1vw] items-center py-[2vh]">
              <div className="">
                <div className="text-lg font-bold">
                  <h1>{reqCourse.courseTitle}</h1>
                </div>
                <div>
                  <h3>{reqCourse.desc}</h3>
                </div>
              </div>
              <div className="text-lg font-bold w-[300px] mx-[5vw]">
                <h1>Rs  {reqCourse.fee}</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            {/* <div className="flex flex-col w-1/2 mr-2 border border-black">
              <div className="pl-3 mt-2 text-lg font-bold">
                <h1>Payment Method</h1>
              </div>
              <div className="flex flex-col pl-3">
                <div className="w-[90%] my-4 border border-black p-2">
                  <input
                    type="radio"
                    id="creditCard"
                    name="creditCard"
                    value="creditCard"
                  />
                  <label for="creditCard" className="ml-2">
                    {" "}
                    Credit Card
                  </label>
                </div>
                <div className="w-[90%] my-4 border border-black p-2">
                  <input
                    type="radio"
                    id="creditCard"
                    name="creditCard"
                    value="creditCard"
                  />
                  <label for="creditCard" className="ml-2">
                    {" "}
                    Debit Card
                  </label>
                </div>
                <div className="w-[90%] my-4 border border-black p-2">
                  <input
                    type="radio"
                    id="creditCard"
                    name="creditCard"
                    value="creditCard"
                  />
                  <label for="creditCard" className="ml-2">
                    {" "}
                    Bank Transfer
                  </label>
                </div>
              </div>
            </div> */}

            <div className="flex flex-col w-1/2 ml-2 border border-black bg-gradient-to-b from-slate-300 to-slate-200">
              <div className="pl-5 my-2 mb-6 text-lg font-bold">
                <h1>Summary</h1>
              </div>

              <div className="flex flex-col">
                <div className="flex px-5 mb-3 text-lg">
                  <div className="min-w-[120px]">
                    <h1>Course Price</h1>
                  </div>
                  <div className="min-w-[200px]">
                    <h1>:</h1>
                  </div>
                  <div>
                    <h1>Rs. {reqCourse.fee}</h1>
                  </div>
                </div>

                <div className="flex px-5 mb-3 text-lg">
                  <div className="min-w-[120px]">
                    <h1>Discounts</h1>
                  </div>
                  <div className="min-w-[200px]">
                    <h1>:</h1>
                  </div>
                  <div>
                    <h1>Rs. 200</h1>
                  </div>
                </div>

                <div>
                  <hr className="ml-5 mr-10 border border-black" />
                </div>

                <div className="flex px-5 mb-8 text-lg">
                  <div className="min-w-[120px]">
                    <h1>Total Price</h1>
                  </div>
                  <div className="min-w-[200px]">
                    <h1>:</h1>
                  </div>
                  <div>
                    <h1>Rs. {reqCourse.fee - 200}</h1>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                {/* <button
                  onClick={onCLick}
                  className="px-10 py-2 text-white bg-orange-500 rounded-xl border-[1px] border-orange-500 hover:bg-white hover:text-orange-500 cursor-pointer tracking-wider text-xl uppercase"
                >
                  proceed
                </button> */}

                <StripeCheckout
                  stripeKey="pk_test_51O0787EjLYednQFI3Ht6MARytVheTePMYtd0a9sTgdUJbadsiyZm2GJ0uwfuTYwXIOjJl3leDVcoU0YrliMXA8My00NdEujPEi"
                  label="Proceed"
                  name="Pay With Credit Card"
                  // billingAddress
                  // shippingAddress
                  amount={reqCourse.fee}
                  description={`Your total is Rs. ${reqCourse.fee - 200}`}
                  token={payNow}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayForCourse;