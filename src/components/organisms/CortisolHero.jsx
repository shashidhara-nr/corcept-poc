import React from 'react';
import './CortisolHero.css';

/**
 * CortisolHero
 * - Replicates the original WordPress/Enfold markup and responsive video behavior.
 * - If you keep your theme CSS, this will look identical.
 * - The local CSS file adds the key visuals (heading border, two-column layout, video cover).
 *
 * Props:
 *  - videoSrc: path or URL to the MP4 (default keeps your original relative path)
 *  - poster: poster image path for the video
 *  - className: optional extra classes for outer section
 */
export default function CortisolHero({
  videoSrc = '/wp-content/uploads/Corcept_Loop_POC.mp4',
  poster = '/wp-content/uploads/Screen-Shot-2024-03-15-at-8.59.48-AM.png',
  className = '',
}) {
  return (
    <section
      id="av-layout-grid-1"
      className={`av-layout-grid-container av-d3n9e-9837038419b85be6d45c871856b9f66a entry-content-wrapper main_color av-flex-cells av-break-at-tablet av-grid-order-reverse av-cell-min-height av-cell-min-height-75 container_wrap fullsize ${className}`}
      data-av_minimum_height_pc="75"
    >
      {/* Left column: Text */}
      <div className="flex_cell av-ls4mrti2-9432a435a75b96645d03cda4ad3009f8 av-gridrow-cell av_one_half no_margin content-align-middle">
        <div className="flex_cell_inner">
          <div className="flex_column av-95lu2-a98e008645e88ae4de71cfb03eac424d av_one_full first flex_column_div">
            <div className="av-special-heading av-ls4mwudq-a3c31a8000f75e279cedc57b515b6b7c av-special-heading-h2 custom-color-heading blockquote modern-quote av-inherit-size">
              <h2 className="av-special-heading-tag" itemProp="headline">
                Explore the Possibilities of <span>Cortisol Modulation.</span>
              </h2>
              <div className="special-heading-border">
                <div className="special-heading-inner-border" />
              </div>
            </div>

            <section
              className="av_textblock_section av-ls66kfx3-f264731721b09e07d28a36ba788a0e0a"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <div className="avia_textblock" itemProp="text">
                <p>
                  <span style={{ color: '#000000', fontWeight: 'bold' }}>
                    What began as a ripple of scientific truth is poised to unleash a sea change of discovery.
                  </span>
                </p>
                <p>
                  We are unlocking the potential of cortisol modulation to revolutionize the treatment of serious diseases.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Right column: Background video (hidden on mobile to match original) */}
      <div className="flex_cell av-ls4mqtuu-904885c5f1c933dac057fbc8dcdc6a2f av-gridrow-cell av_one_half no_margin av-hide-on-mobile WHTPCMAN content-align-top av-zero-padding avia-full-stretch">
        <div className="flex_cell_inner">
          <div className="flex_column_table av-ltomsdoc-d7c9387665e5743699138ad0a58bcae4 sc-av_one_full av-equal-height-column-flextable">
            <div
              className="flex_column av-ltomsdoc-d7c9387665e5743699138ad0a58bcae4 av_one_full first no_margin flex_column_table_cell av-equal-height-column av-align-middle av-custom-positioned av-column-min-height-pc"
              style={{ height: '708.75px' }}
            >
              <section
                className="avia_codeblock_section av-medium-hide av-small-hide av-mini-hide avia_code_block_0"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <div className="avia_codeblock" itemProp="text">
                  <video
                    id="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={poster}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
