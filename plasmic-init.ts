import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "fmV8Z6PqvxxSwKSs6zukZg";
export const projectApiToken = "3XlSSAz64Oe1L3GJsMO20MoBv1itMaBxghUs6dFyfa3admcTW60WvIzIIVf5nd9UJLsd9Wmzrv862AaDhO1A";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
