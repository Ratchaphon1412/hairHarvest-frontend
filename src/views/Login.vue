<template>
  <main class="form-signin w-100 m-auto">
    <form
      @submit.prevent
      data-dashlane-rid="38767d7ab6a0b66c"
      data-form-type="login"
    >
      <img
        class="mb-4"
        src="/docs/5.2/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      />
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          data-dashlane-rid="9577d198f6d435de"
          data-form-type="email"
          data-kwimpalastatus="alive"
          data-kwimpalaid="1668604798323-2"
        />
        <label for="floatingInput">Email address</label>
        <span
          id="1668604798323-2"
          data-dashlanecreated="true"
          style="
            color-scheme: initial;
            writing-mode: initial;
            -webkit-ruby-position: initial;
            color: initial;
            display: inline;
            font-family: initial;
            font-feature-settings: initial;
            font-kerning: initial;
            font-optical-sizing: initial;
            font-palette: initial;
            font-size: initial;
            font-stretch: initial;
            font-style: initial;
            font-synthesis: initial;
            font-variant-alternates: initial;
            font-variant-caps: initial;
            font-variant-east-asian: initial;
            font-variant-ligatures: initial;
            font-variant-numeric: initial;
            font-variant-position: initial;
            font-variation-settings: initial;
            font-weight: initial;
            text-orientation: initial;
            text-rendering: initial;
            -webkit-font-smoothing: initial;
            -webkit-locale: initial;
            -webkit-text-size-adjust: initial;
            -webkit-text-zoom: initial;
            letter-spacing: initial;
            accent-color: initial;
            background-image: url('safari-extension://1A48C6FB-FC08-462D-97B2-F65B34E35BE6/content/injected/logo-autofill-known.svg');
            border-collapse: initial;
            caption-side: initial;
            caret-color: initial;
            clip-rule: initial;
            color-interpolation: initial;
            color-interpolation-filters: initial;
            cursor: initial;
            empty-cells: initial;
            fill: initial;
            fill-opacity: initial;
            fill-rule: initial;
            glyph-orientation-horizontal: initial;
            glyph-orientation-vertical: initial;
            hanging-punctuation: initial;
            image-orientation: initial;
            image-rendering: initial;
            kerning: initial;
            line-break: initial;
            line-height: initial;
            list-style: initial;
            marker-end: initial;
            marker-mid: initial;
            marker-start: initial;
            opacity: 1;
            orphans: initial;
            overflow-wrap: initial;
            pointer-events: initial;
            position: absolute;
            print-color-adjust: initial;
            quotes: initial;
            shape-rendering: initial;
            speak-as: initial;
            stroke: initial;
            stroke-color: initial;
            stroke-dasharray: initial;
            stroke-dashoffset: initial;
            stroke-linecap: initial;
            stroke-linejoin: initial;
            stroke-miterlimit: initial;
            stroke-opacity: initial;
            stroke-width: initial;
            tab-size: initial;
            text-align: initial;
            text-align-last: initial;
            text-anchor: initial;
            text-decoration-skip-ink: initial;
            text-decoration-thickness: initial;
            text-emphasis-color: initial;
            text-emphasis-position: initial;
            text-emphasis-style: initial;
            text-indent: initial;
            text-justify: initial;
            text-shadow: initial;
            text-transform: initial;
            text-underline-offset: initial;
            text-underline-position: initial;
            visibility: visible;
            white-space: initial;
            widows: initial;
            word-break: initial;
            word-spacing: initial;
            z-index: auto;
            -apple-color-filter: initial;
            -internal-text-autosizing-status: initial;
            border-spacing: initial;
            -webkit-box-direction: initial;
            -webkit-cursor-visibility: initial;
            -webkit-hyphenate-character: initial;
            -webkit-hyphenate-limit-after: initial;
            -webkit-hyphenate-limit-before: initial;
            -webkit-hyphenate-limit-lines: initial;
            -webkit-hyphens: initial;
            -webkit-line-align: initial;
            -webkit-line-box-contain: initial;
            -webkit-line-grid: initial;
            -webkit-line-snap: initial;
            -webkit-nbsp-mode: initial;
            -webkit-rtl-ordering: initial;
            -webkit-text-decorations-in-effect: initial;
            -webkit-text-fill-color: initial;
            -webkit-text-security: initial;
            -webkit-text-stroke-color: initial;
            -webkit-text-stroke-width: initial;
            -webkit-user-modify: initial;
            -webkit-user-select: initial;
            background-size: contain;
            border: none;
            left: 281px;
            min-width: 16px;
            text-combine-upright: initial;
            top: 21px;
            width: 16px;
            -webkit-text-combine: initial;
            height: 16px;
            background-position: center center;
            background-repeat: no-repeat no-repeat;
          "
        ></span>
      </div>
      <div class="form-floating">
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          data-dashlane-rid="b6d8857df2228b8a"
          data-form-type="password"
          data-kwimpalastatus="alive"
          data-kwimpalaid="1668604798323-1"
        />
        <label for="floatingPassword">Password</label>
        <span
          id="1668604798323-1"
          data-dashlanecreated="true"
          style="
            color-scheme: initial;
            writing-mode: initial;
            -webkit-ruby-position: initial;
            color: initial;
            display: inline;
            font-family: initial;
            font-feature-settings: initial;
            font-kerning: initial;
            font-optical-sizing: initial;
            font-palette: initial;
            font-size: initial;
            font-stretch: initial;
            font-style: initial;
            font-synthesis: initial;
            font-variant-alternates: initial;
            font-variant-caps: initial;
            font-variant-east-asian: initial;
            font-variant-ligatures: initial;
            font-variant-numeric: initial;
            font-variant-position: initial;
            font-variation-settings: initial;
            font-weight: initial;
            text-orientation: initial;
            text-rendering: initial;
            -webkit-font-smoothing: initial;
            -webkit-locale: initial;
            -webkit-text-size-adjust: initial;
            -webkit-text-zoom: initial;
            letter-spacing: initial;
            accent-color: initial;
            background-image: url('safari-extension://1A48C6FB-FC08-462D-97B2-F65B34E35BE6/content/injected/logo-autofill-unknown.svg');
            border-collapse: initial;
            caption-side: initial;
            caret-color: initial;
            clip-rule: initial;
            color-interpolation: initial;
            color-interpolation-filters: initial;
            cursor: initial;
            empty-cells: initial;
            fill: initial;
            fill-opacity: initial;
            fill-rule: initial;
            glyph-orientation-horizontal: initial;
            glyph-orientation-vertical: initial;
            hanging-punctuation: initial;
            image-orientation: initial;
            image-rendering: initial;
            kerning: initial;
            line-break: initial;
            line-height: initial;
            list-style: initial;
            marker-end: initial;
            marker-mid: initial;
            marker-start: initial;
            opacity: 1;
            orphans: initial;
            overflow-wrap: initial;
            pointer-events: initial;
            position: absolute;
            print-color-adjust: initial;
            quotes: initial;
            shape-rendering: initial;
            speak-as: initial;
            stroke: initial;
            stroke-color: initial;
            stroke-dasharray: initial;
            stroke-dashoffset: initial;
            stroke-linecap: initial;
            stroke-linejoin: initial;
            stroke-miterlimit: initial;
            stroke-opacity: initial;
            stroke-width: initial;
            tab-size: initial;
            text-align: initial;
            text-align-last: initial;
            text-anchor: initial;
            text-decoration-skip-ink: initial;
            text-decoration-thickness: initial;
            text-emphasis-color: initial;
            text-emphasis-position: initial;
            text-emphasis-style: initial;
            text-indent: initial;
            text-justify: initial;
            text-shadow: initial;
            text-transform: initial;
            text-underline-offset: initial;
            text-underline-position: initial;
            visibility: visible;
            white-space: initial;
            widows: initial;
            word-break: initial;
            word-spacing: initial;
            z-index: auto;
            -apple-color-filter: initial;
            -internal-text-autosizing-status: initial;
            border-spacing: initial;
            -webkit-box-direction: initial;
            -webkit-cursor-visibility: initial;
            -webkit-hyphenate-character: initial;
            -webkit-hyphenate-limit-after: initial;
            -webkit-hyphenate-limit-before: initial;
            -webkit-hyphenate-limit-lines: initial;
            -webkit-hyphens: initial;
            -webkit-line-align: initial;
            -webkit-line-box-contain: initial;
            -webkit-line-grid: initial;
            -webkit-line-snap: initial;
            -webkit-nbsp-mode: initial;
            -webkit-rtl-ordering: initial;
            -webkit-text-decorations-in-effect: initial;
            -webkit-text-fill-color: initial;
            -webkit-text-security: initial;
            -webkit-text-stroke-color: initial;
            -webkit-text-stroke-width: initial;
            -webkit-user-modify: initial;
            -webkit-user-select: initial;
            background-size: contain;
            border: none;
            left: 281px;
            min-width: 16px;
            text-combine-upright: initial;
            top: 21px;
            width: 16px;
            -webkit-text-combine: initial;
            height: 16px;
            background-position: center center;
            background-repeat: no-repeat no-repeat;
          "
        ></span>
      </div>

      <div class="checkbox mb-3">
        <label data-dashlane-label="true">
          <input
            type="checkbox"
            value="remember-me"
            data-dashlane-rid="e11ce13dfa0aad2d"
            data-form-type="consent,rememberme"
          />
          Remember me
        </label>
      </div>
      <button
        @click="login"
        class="w-100 btn btn-lg btn-primary"
        type="submit"
        data-dashlane-label="true"
        data-dashlane-rid="571c0a7294b9a9a6"
        data-form-type="action,login"
      >
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
    </form>
  </main>
</template>

<script>
import {useAuthStore} from '@/store/auth.js';

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // console.log(this.email, this.password);
       const auth_store = useAuthStore()
      if(auth_store.login(this.email,this.password)){
         await this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
