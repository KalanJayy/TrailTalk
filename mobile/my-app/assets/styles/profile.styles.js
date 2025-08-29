// styles/profile.styles.js
import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  profileHeader: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  profileInfo: {
    alignItems: "center",
  },
  username: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  memberSince: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },

  logoutButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    alignSelf: "center",
    width: "80%",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  logoutText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 16,
  },

  booksHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  booksTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  booksCount: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  booksList: {
    paddingBottom: 40,
  },
  bookItem: {
    flexDirection: "row",
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  bookImage: {
    width: 70,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  bookInfo: {
    flex: 1,
    justifyContent: "center",
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  bookCaption: {
    fontSize: 14,
    color: COLORS.textDark,
    marginBottom: 4,
    flex: 1,
  },
  bookDate: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },

  deleteButton: {
    padding: 8,
    justifyContent: "center",
  },

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    marginTop: 30,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginTop: 16,
    textAlign: "center",
  },

  addButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignSelf: "center",
    width: "80%",
    alignItems: "center",
    marginTop: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  addButtonText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default styles;
