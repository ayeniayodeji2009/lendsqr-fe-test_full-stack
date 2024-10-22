import "./userFilter.scss"



export default function UserFilter() {

    return (
        <div className="user_filter_container">
        <form>
          <label
            htmlFor="organization"
            className="form-label"
          >
            Organization
          </label>
          <select name="organization" id="organization">
            <option value="lendsqr">Lendsqr</option>
            <option value="opay">Opay</option>
            <option value="paystack">Paystack</option>
            <option value="palmpay">Palmpay</option>
          </select>
          <label
            htmlFor="userName"
            className="form-label"
          >
            Username
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="User"
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
          />
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Date"
          />
          <label
            htmlFor="phoneNumber"
            className="form-label"
          >
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
          />
          <label
            htmlFor="status"
            className="form-label"
          >
            Status
          </label>
          <select name="status" id="status">
            <option value="select">select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
          <div className="user_filter_button">
            <button id="reset_btn">Reset</button>
            <button id="filter_btn">Filter</button>
          </div>
        </form>
      </div>
    )
}