# Jenkins MCP by usefulapi

Use your [Jenkins](https://www.jenkins.io) account from Claude, Cursor, or any MCP client. Read jobs, builds, console logs, the build queue and agents, and start builds on your Jenkins controller. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://jenkins.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://jenkins.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http jenkins https://jenkins.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=jenkins&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fjenkins.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "jenkins": {
      "url": "https://jenkins.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Jenkins credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/jenkins/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Jenkins address** (the public https root you log in at), your **Jenkins user name** and an **API token** (your user page, Configure, API Token). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `jenkins_get_server` | read | Get server info |
| `jenkins_list_jobs` | read | List jobs |
| `jenkins_get_job` | read | Get a job |
| `jenkins_list_builds` | read | List builds |
| `jenkins_get_build` | read | Get a build |
| `jenkins_get_build_log` | read | Get a build log (tail) |
| `jenkins_get_queue` | read | Get the build queue |
| `jenkins_list_nodes` | read | List agents (nodes) |
| `jenkins_trigger_build` | **write** | Start a build |
| `jenkins_usage_status` | meta | Usage status (free-tier meter) |
| `jenkins_request_feature` | meta | Request a missing feature |
| `jenkins_upgrade` | meta | Upgrade to Pro or Pro+ |
| `jenkins_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `jenkins_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `jenkins_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `jenkins_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
