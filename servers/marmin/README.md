# Marmin MCP by usefulapi

Use your [Marmin](https://marmin.ai) account from Claude, Cursor, or any MCP client. Read UAE e-invoices, credit notes, Peppol status and business profiles. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://marmin.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://marmin.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http marmin https://marmin.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=marmin&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmarmin.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "marmin": {
      "url": "https://marmin.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Marmin credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/marmin/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Environment** (production or sandbox), your **Client ID** (starts with `org_`) and your **Client Secret** (shown after an email code). Find them in the Marmin Developer Dashboard, under Settings, then API Configuration. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `marmin_list_business_profiles` | read | List business profiles |
| `marmin_get_business_profile` | read | Get a business profile |
| `marmin_list_documents` | read | List documents |
| `marmin_list_document_uuids` | read | List document ids created on a day |
| `marmin_get_document` | read | Get a document |
| `marmin_get_document_xml` | read | Get the UBL XML of a document |
| `marmin_get_peppol_status` | read | Get the Peppol status of a document |
| `marmin_get_peppol_status_log` | read | Get the Peppol status log of a document |
| `marmin_get_register_entry` | read | Get a register entry |
| `marmin_get_codelist` | read | Get a code list |
| `marmin_usage_status` | meta | Usage status (free-tier meter) |
| `marmin_request_feature` | meta | Request a missing feature |
| `marmin_upgrade` | meta | Upgrade to Pro or Pro+ |
| `marmin_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `marmin_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `marmin_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `marmin_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
