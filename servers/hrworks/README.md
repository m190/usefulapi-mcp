# HR WORKS MCP by usefulapi

Use your [HR WORKS](https://www.hrworks.de) account from Claude, Cursor, or any MCP client. It reads persons, organization units, absences, job postings and applications, and it changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hrworks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hrworks.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hrworks https://hrworks.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hrworks&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhrworks.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hrworks": {
      "url": "https://hrworks.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HR WORKS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hrworks/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **HR WORKS access key** and **secret access key** of an API key pair. An HR WORKS API administrator creates the pair under **Administrator → Basics → HRworks API**, and the secret is shown only once. The server validates the pair and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hrworks_list_persons` | read | List persons |
| `hrworks_get_person` | read | Get person |
| `hrworks_list_organization_units` | read | List organization units |
| `hrworks_list_absences` | read | List absences |
| `hrworks_list_posts` | read | List job postings |
| `hrworks_list_job_applications` | read | List job applications |
| `hrworks_usage_status` | meta | Usage status (free-tier meter) |
| `hrworks_request_feature` | meta | Request a missing feature |
| `hrworks_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hrworks_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `hrworks_upgrade` (it returns a Stripe Checkout link). Cancel any time with `hrworks_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `hrworks_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
