// styles/signup.styles.js
import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    fontFamily: "JetBrainsMono-Medium",
    color: COLORS.textPrimary,
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 20,
  },

  formContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 24,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: COLORS.textPrimary,
    fontWeight: "600",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBackground,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 16,
    height: 50,
    alignSelf: "center",
    width: "85%",
  },
  inputIcon: {
    marginRight: 10,
    opacity: 0.7,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textDark,
    textAlign: "center", // same centered input style
  },
  eyeIcon: {
    padding: 6,
  },

  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    height: 52,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: "85%",
    alignSelf: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.5,
    textAlign: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
  },
  footerText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    marginRight: 6,
    textAlign: "center",
  },
  link: {
    color: COLORS.primary,
    fontWeight: "700",
    fontSize: 14,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default styles;
