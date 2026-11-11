# ByDoctor MCP by usefulapi

Use your ByDoctor account from Claude, Cursor, or any MCP client. Read appointments, professionals and rooms, and book, update or cancel in-person appointments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bydoctor.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bydoctor.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bydoctor https://bydoctor.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bydoctor&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbydoctor.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bydoctor": {
      "url": "https://bydoctor.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ByDoctor credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bydoctor/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **ByDoctor API key** (starts with `bd_live_`; Minha Clínica → API e Webhooks in ByDoctor; choose read-only or full access). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bydoctor_list_appointments` | read | List appointments |
| `bydoctor_get_appointment` | read | Get an appointment |
| `bydoctor_list_patients` | read | Find patients |
| `bydoctor_get_patient` | read | Get a patient |
| `bydoctor_list_professionals` | read | List professionals |
| `bydoctor_get_professional` | read | Get a professional |
| `bydoctor_list_rooms` | read | List rooms |
| `bydoctor_get_room` | read | Get a room |
| `bydoctor_list_appointment_types` | read | List appointment types |
| `bydoctor_get_appointment_type` | read | Get an appointment type |
| `bydoctor_create_appointment` | **write** | Create an in-person appointment |
| `bydoctor_update_appointment` | **write** | Update an appointment |
| `bydoctor_cancel_appointment` | **write** | Cancel an appointment |
| `bydoctor_create_patient` | **write** | Create a patient |
| `bydoctor_update_patient` | **write** | Update a patient |
| `bydoctor_usage_status` | meta | Usage status (free-tier meter) |
| `bydoctor_request_feature` | meta | Request a missing feature |
| `bydoctor_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bydoctor_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bydoctor_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bydoctor_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bydoctor_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
