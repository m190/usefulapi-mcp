# eSignatures MCP by usefulapi

Use your [eSignatures](https://esignatures.com) account from Claude, Cursor, or any MCP client. Read templates and contracts, create and send contracts, add signers, and edit contract text and placeholder values. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://esignatures-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://esignatures-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http esignatures-io https://esignatures-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=esignatures-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fesignatures-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "esignatures-io": {
      "url": "https://esignatures-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your eSignatures credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/esignatures-io/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **eSignatures Secret Token** (API page after you log in). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `esignatures_list_templates` | read | List templates |
| `esignatures_get_template` | read | Get template |
| `esignatures_get_template_content` | read | Get template content |
| `esignatures_list_template_collaborators` | read | List template collaborators |
| `esignatures_get_contract` | read | Get contract |
| `esignatures_get_contract_content` | read | Get contract content |
| `esignatures_get_placeholder_fields` | read | Get placeholder fields |
| `esignatures_create_contract` | **write** | Create contract |
| `esignatures_send_draft` | **write** | Send draft contract |
| `esignatures_withdraw_contract` | **write** | Withdraw contract |
| `esignatures_add_signer` | **write** | Add signer |
| `esignatures_resend_signer_request` | **write** | Resend signature request |
| `esignatures_update_contract_content` | **write** | Edit contract content |
| `esignatures_update_placeholder_fields` | **write** | Update placeholder fields |
| `esignatures_usage_status` | meta | Usage status (free-tier meter) |
| `esignatures_request_feature` | meta | Request a missing feature |
| `esignatures_upgrade` | meta | Upgrade to Pro or Pro+ |
| `esignatures_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `esignatures_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `esignatures_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `esignatures_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
