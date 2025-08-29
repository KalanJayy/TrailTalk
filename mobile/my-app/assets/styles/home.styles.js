// styles/home.styles.js
import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  listContainer: {
    padding: 20,
    paddingBottom: 90,
    width: "100%",
  },

  header: {
    alignItems: "center",
    marginBottom: 28,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    fontFamily: "JetBrainsMono-Medium",
    color: COLORS.textPrimary,
    textAlign: "center",
    marginBottom: 6,
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 20,
  },

  // Instead of card, each post is now just a clean section
  bookSection: {
    marginBottom: 32,
    alignItems: "center",
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textPrimary,
  },

  bookImageContainer: {
    width: width * 0.85,
    height: width * 0.55,
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 14,
    backgroundColor: COLORS.border,
  },
  bookImage: {
    width: "100%",
    height: "100%",
  },

  bookDetails: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 8,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  caption: {
    fontSize: 15,
    color: COLORS.textDark,
    marginBottom: 10,
    lineHeight: 22,
    textAlign: "center",
  },
  date: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: "center",
  },

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    marginTop: 60,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginTop: 18,
    marginBottom: 6,
    textAlign: "center",
  },
  emptySubtext: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 20,
  },

  footerLoader: {
    marginVertical: 24,
  },
});

export default styles;
