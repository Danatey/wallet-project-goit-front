import { React, Component } from "react";
import { connect } from "react-redux";
import MainButton from "../MainButton";
import { authOperations } from "../../redux/auth";
import "./LoginForm.scss";
import "../MainButton/MainButton.scss";

class LoginForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    emptyNameField: false,
    emptyEmailField: false,
    emptyPasswordField: false,
  };

  handleRegister = (evt) => {
    evt.preventDefault();

    const { name, email, password } = this.state;

    if (this.chekUserField(name, email, password)) {
      this.props.onRegister({ name, email, password });
      this.setState({ name: "", email: "", password: "" });
    }
  };

  handleLogin = (evt) => {
    evt.preventDefault();

    const { name, email, password } = this.state;

    if (this.chekUserField(name, email, password, true)) {
      this.props.onLogin({ name, email, password });
      this.setState({ name: "", email: "", password: "" });
    }
  };

  chekUserField(name, email, password, isLogin = false) {
    if (isLogin) {
      name = " ";
    }
    if (!name) {
      this.setState({ emptyNameField: true });
    }
    if (!email) {
      this.setState({ emptyEmailField: true });
    }
    if (!password) {
      this.setState({ emptyPasswordField: true });
    }

    if (name && email && password) {
      this.setState({
        emptyNameField: false,
        emptyEmailField: false,
        emptyPasswordField: false,
      });

      return true;
    } else {
      return false;
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  render() {
    const {
      emptyNameField,
      emptyEmailField,
      emptyPasswordField,
      name,
      email,
      password,
    } = this.state;

    const { handleChange } = this;
    return (
      <div className="container_form">
        <form className="form" autoComplete="off">
          {/* <div>
                    <p>
                    Вы можете авторизоваться с помощью <br />
                    Google Account:
                    </p>
                    
                    попробовать логин с помощью гугла

                </div> */}

          <div className="container_input">
            <p className="text">
              Или зайти с помощью e-mail и пароля, предварительно
              зарегистрировавшись:
            </p>

            <label className="label">
              {!emptyEmailField ? "" : <sup className="form__star">*</sup>}
              E-mail:
              <input
                className="input"
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={email}
                placeholder="your@email.com"
                title="Введите свою пошту."
                required
                onChange={handleChange}
              />
              {!emptyEmailField ? (
                ""
              ) : (
                <p className="form__attention-text">это обязательное поле</p>
              )}
            </label>

            <label className="label">
              {!emptyPasswordField ? "" : <sup className="form__star">*</sup>}
              Пароль:
              <input
                className="input"
                onChange={handleChange}
                type="password"
                name="password"
                value={password}
                placeholder="Пароль"
                title="Пароль больше 6-ти символов"
                required
                minLength="6"
              />
              {!emptyPasswordField ? (
                ""
              ) : (
                <p className="form__attention-text">это обязательное поле</p>
              )}
            </label>

            <label className="label">
              {!emptyNameField ? "" : <sup className="form__star">*</sup>}
              Имя:
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                placeholder="Ваше имя"
                required
                minLength="3"
                onChange={handleChange}
              />
              {!emptyNameField ? (
                ""
              ) : (
                <p className="form__attention-text">это обязательное поле</p>
              )}
            </label>
          </div>

          <div className="button_container">
            <MainButton
              type="submit"
              text="Вход"
              className="main-btn mr-20"
              onClick={this.handleLogin}
              disable="sd"
            />
            <MainButton
              type="submit"
              text="Регистрация"
              className="register-btn"
              onClick={this.handleRegister}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(LoginForm);
