# Ziflow MCP by usefulapi

Use your [Ziflow](https://www.ziflow.com) account from Claude, Cursor, or any MCP client. Read proofs, comments, folders, users and activity, and add or resolve comments on a proof. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ziflow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ziflow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ziflow https://ziflow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ziflow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fziflow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ziflow": {
      "url": "https://ziflow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Ziflow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ziflow/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Ziflow API key** (View Profile → API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ziflow_create_proof` | **write** | Create proof from file or video URLs |
| `ziflow_add_reviewers` | **write** | Add approvers or commenters to a stage |
| `ziflow_list_proofs` | read | List proofs |
| `ziflow_get_proof` | read | Get a proof |
| `ziflow_search_proofs` | read | Search proofs |
| `ziflow_list_proof_activities` | read | List proof activity |
| `ziflow_list_comments` | read | List comments |
| `ziflow_get_comment` | read | Get a comment |
| `ziflow_list_folders` | read | List root folders |
| `ziflow_get_folder` | read | Get a folder |
| `ziflow_list_users` | read | List users |
| `ziflow_get_user` | read | Get a user |
| `ziflow_list_contacts` | read | List contacts |
| `ziflow_list_workflow_templates` | read | List workflow templates |
| `ziflow_list_webhooks` | read | List webhook subscriptions |
| `ziflow_add_comment` | **write** | Add a comment |
| `ziflow_resolve_comment` | **write** | Resolve or reopen a comment |
| `ziflow_usage_status` | meta | Usage status (free-tier meter) |
| `ziflow_request_feature` | meta | Request a missing feature |
| `ziflow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ziflow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `ziflow_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `ziflow_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `ziflow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
