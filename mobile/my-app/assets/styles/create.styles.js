// styles/create.styles.js
import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
  form: {
    width: "100%",
    marginTop: 10,
  },
  formGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: COLORS.textPrimary,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBackground,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 48,
    color: COLORS.textDark,
  },
  textArea: {
    backgroundColor: COLORS.inputBackground,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    height: 110,
    color: COLORS.textDark,
    textAlignVertical: "top",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.inputBackground,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 10,
  },
  starButton: {
    padding: 6,
  },
  imagePicker: {
    width: "100%",
    height: 200,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  placeholderContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: COLORS.textSecondary,
    marginTop: 8,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: "85%",
    alignSelf: "center", // ✅ keep consistent with login/signup
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  buttonIcon: {
    marginRight: 8,
  },
});

export default styles;
