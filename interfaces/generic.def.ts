const BOARD_GAMES_API_URL = "http://localhost:3000";

export enum AccountType {
  Admin,
  User,
  Guest,
}

export const BoardGamesApiURL = {
  Login: `${BOARD_GAMES_API_URL}/auth/login`,
  Register: `${BOARD_GAMES_API_URL}/auth/register`,
  Profile: `${BOARD_GAMES_API_URL}/profile`,
  Products: `${BOARD_GAMES_API_URL}/products`,
};
