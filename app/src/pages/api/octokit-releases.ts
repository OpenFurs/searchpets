import { Octokit } from "octokit"
import { Endpoints } from "@octokit/types"

type ReleasesParams =
  Endpoints["GET /repos/{owner}/{repo}/releases"]["parameters"]
type ReleasesResponse =
  Endpoints["GET /repos/{owner}/{repo}/releases"]["response"]

export default async function rel(req: ReleasesParams, res: ReleasesResponse) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  await octokit.request("GET /repos/OpenFurs/searchpets/releases", {
    owner: "OpenFurs",
    repo: "searchpets",
  })
}
