import axios from "axios";
import Wrapper from "../Styles/Newsletter";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";
export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const response = await axios.post(newsletterUrl, data);
        toast.success(response.data.msg);
        return redirect("/");
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.msg);
        return error;
    }
};
const Newsletter = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    return (
        <Wrapper>
            <Form className="form" method="post">
                <h3 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    Our Newsletter
                </h3>
                <div className="form-element">
                    <label className="form-label" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={"bechir"}
                    />
                </div>
                <div className="form-element">
                    <label className="form-label" htmlFor="surname">
                        surname:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="lastName"
                        id="surname"
                        defaultValue={"mahamat"}
                    />
                </div>
                <div className="form-element">
                    <label className="form-label" htmlFor="email">
                        email:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="email"
                        id="email"
                        defaultValue={"test@test.com"}
                    />
                </div>
                <button
                    type="btn"
                    className="btn btn-center"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting" : "submit"}
                </button>
            </Form>
        </Wrapper>
    );
};
export default Newsletter;
