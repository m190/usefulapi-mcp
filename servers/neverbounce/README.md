# NeverBounce MCP by usefulapi

Connect your NeverBounce account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://neverbounce.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http neverbounce https://neverbounce.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=neverbounce&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fneverbounce.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "neverbounce": {
      "url": "https://neverbounce.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your NeverBounce credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/neverbounce/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `neverbounce_get_account_info` | read | Get account info and credits |
| `neverbounce_verify_email` | **write** | Verify one email address |
| `neverbounce_list_jobs` | read | List verification jobs |
| `neverbounce_get_job` | read | Get job status |
| `neverbounce_get_job_results` | read | Get job results (paged) |
| `neverbounce_download_job_results` | read | Download job results as CSV |
| `neverbounce_create_job` | **write** | Create a bulk verification job |
| `neverbounce_start_job` | **write** | Start a verification job |
| `neverbounce_usage_status` | meta | Usage status (free-tier meter) |
| `neverbounce_request_feature` | meta | Request a missing feature |
| `neverbounce_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `neverbounce_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per Custom Integration API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `neverbounce_upgrade` (it returns a Stripe Checkout link). Cancel any time with `neverbounce_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `neverbounce_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
