

export type GitUserInfo = {
    id: number,
    avatar_url: string,
    url: string,
    login: string,
  }

export type Details = {
  avatar_url?: string,
  login?: string,
  name?: string, 
  public_repos?: number,
  followers?: number,
  following?: number
}