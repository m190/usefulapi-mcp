# Wasi MCP by usefulapi

Use your [Wasi](https://wasi.co) account from Claude, Cursor, or any MCP client. Search properties, clients and agenda tasks, and create or update clients, client links and tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://wasi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wasi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wasi https://wasi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wasi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwasi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wasi": {
      "url": "https://wasi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Wasi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wasi/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **id_company** (numeric company id) and **wasi_token** (Configuración / Ajustes generales → API de Wasi → Generar token in Wasi; the API needs a Pro plan). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wasi_search_properties` | read | Search properties |
| `wasi_get_property` | read | Get property |
| `wasi_list_property_clients` | read | List clients of a property |
| `wasi_list_property_documents` | read | List property documents |
| `wasi_list_property_types` | read | List property types |
| `wasi_search_clients` | read | Search clients |
| `wasi_get_client` | read | Get client |
| `wasi_list_client_properties` | read | List properties of a client |
| `wasi_list_client_types` | read | List client types |
| `wasi_list_tasks` | read | List agenda tasks |
| `wasi_get_task` | read | Get agenda task |
| `wasi_list_users` | read | List users |
| `wasi_create_client` | **write** | Create client |
| `wasi_update_client` | **write** | Update client |
| `wasi_link_client_to_property` | **write** | Link client to property |
| `wasi_update_property` | **write** | Update property |
| `wasi_create_task` | **write** | Create agenda task |
| `wasi_update_task` | **write** | Update agenda task |
| `wasi_delete_task` | **write** | Delete agenda task |
| `wasi_usage_status` | meta | Usage status (free-tier meter) |
| `wasi_request_feature` | meta | Request a missing feature |
| `wasi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `wasi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `wasi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `wasi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `wasi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
